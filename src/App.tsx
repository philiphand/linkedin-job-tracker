import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./Components/HeaderMenu/Header";
import { TodayTopTen } from "./Components/Pages/Today/TodayTopTen";
import { TodayAll } from "./Components/Pages/Today/TodayAll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Category } from "./Components/Pages/Categories/Category";
import { History } from "./Components/Pages/History/History";
import { libraries, other, programmingLanguages, software } from "./Scripts/categories";
import { getHistory, getYesterday } from "./Scripts/dateHelper";
import { About } from "./Components/Pages/About/About";
import { JobTitles } from "./Components/Pages/JobTitles/JobTitles";
import { api_url } from "./Scripts/api";
import { Trending } from "./Components/Pages/Trending/Trending";
import { emptyJobTitleObject, jobTitles, JobTitleSkillGroups, TitleShortHands } from "./Scripts/jobTitles";

export interface Skill {
	skillName: String;
	searchResultSum: String;
}

// Main component
// This is where all data is fetched from the API and stored in a "global state"
// No state management library is used, all state is simply passed as props
// This is because the application has few "levels" and is relatively non-hierchial
// All data is fetched once, to prevent loading times when switching pages

export const App: React.FC = () => {
	const [allSkillsHistory, setAllSkillsHistory] = useState<[Skill[]]>([[]])
	const [allSkillsToday, setAllSkillsToday] = useState<Skill[]>([])
	const [topTenSkillsToday, setTopTenSkillsToday] = useState<Skill[]>([])

	//const [jobTitleSkillGroups, setJobTitleSkillgroups] = useState<JobTitleSkillGroups>()
	const [devOpsSkills, setDevOpsSkills] = useState<[String[]]>([[]])
	const [frontEndSkills, setFrontEndSkills] = useState<[String[]]>([[]])
	const [backEndSkills, setBackEndSkills] = useState<[String[]]>([[]])
	const [fullStackSkills, setFullStackSkills] = useState<[String[]]>([[]])
	const [scientistSkills, setScientistSkills] = useState<[String[]]>([[]])


	useEffect(() => {

		const historyDates = getHistory()
		let allResults: any = []

		// WARNING
		// This loop could become expensive as the database grows
		// It fetches all records in the database table

		historyDates.forEach(date => {

			fetch(api_url + "all/" + date).then(res => {
				res.json().then(data => {

					// Sorts all skills by searchResultSum in descending order
					let result = data.entities.sort((a: { searchResultSum: string; }, b: { searchResultSum: string; }) => parseFloat(b.searchResultSum) - parseFloat(a.searchResultSum));

					// Handle incorrect skill names here
					result.forEach((entity: Skill) => {
						if (entity.skillName === "Csharp") entity.skillName = "C#"
						if (entity.skillName === "CICD") entity.skillName = "CI/CD"
					})


					allResults.push(result)

					if (date === getYesterday()) {
						setAllSkillsToday(result) // Results from yesterday
						let topTen = []
						for (let i = 0; i < 10; i++) {
							topTen.push(result[i])
						}
						setTopTenSkillsToday(topTen)
					}
				})
			})
		})
		setAllSkillsHistory(allResults)
		console.log(allResults)


		jobTitles.forEach(title => {
			fetch(api_url + "jobtitle/" + title).then(res => {
				res.json().then(data => {
					const skills = data.keywordGroups
					if (title === TitleShortHands.devops) setDevOpsSkills(skills)
					if (title === TitleShortHands.frontend) setFrontEndSkills(skills)
					if (title === TitleShortHands.backend) setBackEndSkills(skills)
					if (title === TitleShortHands.fullstack) setFullStackSkills(skills)
					if (title === TitleShortHands.scientist) setScientistSkills(skills)
					console.log(skills)
				})
			})
		})
	}, [])

	return (
		<Router>
			<Header />
			<Content>
				<Switch>
					<Route path="/history">
						<History allSkillsHistory={allSkillsHistory} />
					</Route>
					<Route path="/trending">
						<Trending allSkillsHistory={allSkillsHistory} />
					</Route>
					<Route path="/today/top/10">
						<TodayTopTen topTenSkillsToday={topTenSkillsToday} />
					</Route>
					<Route path="/today/all">
						<TodayAll skillsToday={allSkillsToday} />
					</Route>
					<Route path="/categories/languages">
						<Category allSkillsToday={allSkillsToday} categoryArray={programmingLanguages} categoryName="Programming languages" />
					</Route>
					<Route path="/categories/libraries">
						<Category allSkillsToday={allSkillsToday} categoryArray={libraries} categoryName="Frameworks and libraries" />
					</Route>
					<Route path="/categories/software">
						<Category allSkillsToday={allSkillsToday} categoryArray={software} categoryName="Software" />
					</Route>
					<Route path="/categories/other">
						<Category allSkillsToday={allSkillsToday} categoryArray={other} categoryName="Other keywords" />
					</Route>
					<Route path="/jobtitles/devops">
						<JobTitles jobTitleSkillGroups={devOpsSkills} jobTitle="DevOps Engineer" />
					</Route>
					<Route path="/jobtitles/frontend">
						<JobTitles jobTitleSkillGroups={frontEndSkills} jobTitle="Front End Developer" />
					</Route>
					<Route path="/jobtitles/backend">
						<JobTitles jobTitleSkillGroups={backEndSkills} jobTitle="Back End Developer" />
					</Route>
					<Route path="/jobtitles/fullstack">
						<JobTitles jobTitleSkillGroups={fullStackSkills} jobTitle="Full Stack Developer" />
					</Route>
					<Route path="/jobtitles/scientist">
						<JobTitles jobTitleSkillGroups={scientistSkills} jobTitle="Data Scientist" />
					</Route>
					<Route path="/about">
						<About />
					</Route>
				</Switch>
			</Content>
		</Router>
	);
}

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`