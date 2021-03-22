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

export interface Skill {
	skillName: string;
	searchResultSum: string;
}

// Main component
// This is where all data is fetched from the API and stored in a "global state"
// No state management library is used, all state is simply passed as props
// This is because the application has few "levels" and is relatively non-hierchial
// All data is fetched once, to prevent loading times when switching pages

export const App: React.FC = () => {
	const [allSkillsHistory, setAllSkillsHistory] = useState<[Skill[]]>([[]])
	const [skillsToday, setSkillsToday] = useState<Skill[]>([])
	const [topTenSkillsToday, setTopTenSkillsToday] = useState<Skill[]>([])

	useEffect(() => {

		// Get yesterday's data
		if (false) fetch("https://linkedin-job-tracker-api.azurewebsites.net/all/" + getYesterday()).then(res => {
			res.json().then(data => {
				console.log(data)
				// Sorts all skills by searchResultSum in descending order
				let allEntities = data.entities.sort((a: { searchResultSum: string; }, b: { searchResultSum: string; }) => parseFloat(b.searchResultSum) - parseFloat(a.searchResultSum));

				// Handle incorrect skill names here
				allEntities.forEach((entity: { skillName: string; }) => {
					if (entity.skillName === "Csharp") entity.skillName = "C#"
					if (entity.skillName === "CICD") entity.skillName = "CI/CD"
				})

				let topTen = []
				for (let i = 0; i < 10; i++) {
					// Handle incorrect names here
					topTen.push(allEntities[i])
				}

				setTopTenSkillsToday(topTen)
				setSkillsToday(allEntities)
			})
		})

		const historyDates = getHistory()
		let allResults: any = []

		historyDates.forEach(date => {

			fetch("https://linkedin-job-tracker-api.azurewebsites.net/all/" + date).then(res => {
				res.json().then(data => {
					console.log(data)
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
							// Handle incorrect names here
							topTen.push(result[i])
						}
						setTopTenSkillsToday(topTen)
					}
					setSkillsToday(result)
				})
			})
		})
		setAllSkillsHistory(allResults)
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