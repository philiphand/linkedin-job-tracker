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

export interface Skill {
	skillName: string;
	searchResultSum: string;
}

interface ProgrammerSkills {
	jobListingKeywords: [string[]];
}


// Main component
// This is where most data is fetched from the API and stored in a "global state"
// No state management library is used, all state is simply passed as props
// This is because the application has few "levels" and is relatively non-hierchial
// All data is fetched once, to prevent loading times when switching pages

export const App: React.FC = () => {
	const [allSkillsHistory, setAllSkillsHistory] = useState<[Skill[]]>([[]])
	const [skillsToday, setSkillsToday] = useState<Skill[]>([])
	const [topTenSkillsToday, setTopTenSkillsToday] = useState<Skill[]>([])
	const [programmerSkills, setProgrammerSkills] = useState<ProgrammerSkills>({ jobListingKeywords: [[""]] })


	useEffect(() => {

		const historyDates = getHistory()
		let allResults: any = []

		// WARNING
		// This loop could become expensive as the database grows
		// It fetches all records in the database table

		historyDates.forEach(date => {

			fetch("https://linkedin-job-tracker-api.azurewebsites.net/all/" + date).then(res => {
				res.json().then(data => {

					// Sorts all skills by searchResultSum in descending order
					let result = data.entities.sort((a: { searchResultSum: string; }, b: { searchResultSum: string; }) => parseFloat(b.searchResultSum) - parseFloat(a.searchResultSum));

					// Handle incorrect skill names here
					result.forEach((entity: { skillName: string; }) => {
						if (entity.skillName === "Csharp") entity.skillName = "C#"
						if (entity.skillName === "CICD") entity.skillName = "CI/CD"
					})


					allResults.push(result)

					if (date === getYesterday()) {
						let topTen = []
						for (let i = 0; i < 10; i++) {
							topTen.push(result[i])
						}
						setTopTenSkillsToday(topTen)
					}
					setSkillsToday(result)
				})
			})
		})
		setAllSkillsHistory(allResults)

		const yesterday = getYesterday()

		fetch("https://linkedin-job-tracker-api.azurewebsites.net/programmer/" + yesterday).then(res => {
			res.json().then(data => {
				setProgrammerSkills(data)
				console.log(data)
			})
		})

		console.log(allResults)
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
						<History allSkillsHistory={allSkillsHistory} />
					</Route>
					<Route path="/today/top/10">
						<TodayTopTen topTenSkillsToday={topTenSkillsToday} />
					</Route>
					<Route path="/today/all">
						<TodayAll skillsToday={skillsToday} />
					</Route>
					<Route path="/categories/languages">
						<Category skillsToday={skillsToday} categoryArray={programmingLanguages} categoryName="Programming languages" />
					</Route>
					<Route path="/categories/libraries">
						<Category skillsToday={skillsToday} categoryArray={libraries} categoryName="Frameworks and libraries" />
					</Route>
					<Route path="/categories/software">
						<Category skillsToday={skillsToday} categoryArray={software} categoryName="Software" />
					</Route>
					<Route path="/categories/other">
						<Category skillsToday={skillsToday} categoryArray={other} categoryName="Other keywords" />
					</Route>
					<Route path="/programmer">
						<JobTitles programmerSkills={programmerSkills} />
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