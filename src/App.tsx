import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./Components/HeaderMenu/Header";
import { TodayTopTen } from "./Components/Pages/Today/TodayTopTen";
import { TodayAll } from "./Components/Pages/Today/TodayAll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Category } from "./Components/Pages/Categories/Category";
import { libraries, other, programmingLanguages, software } from "./Scripts/categories";

const getToday = () => {
	const now = new Date();
	const dd = String(now.getDate()).padStart(2, '0')
	const mm = String(now.getMonth() + 1).padStart(2, '0') // January is 0
	const yyyy = now.getFullYear()
	const today = mm + dd + yyyy

	return today
}

export interface Skill {
	skillName: string;
	searchResultSum: string;
}

// Main component
// This is where all data is fetched from the API and stored in a "global state"
// No state management is used, all state is simply passed as props
// This is because the application has few "levels" and is relatively non-hierchial
// All data is fetched once, to prevent loading times when switching pages

export const App: React.FC = () => {
	const [skillsToday, setSkillsToday] = useState<Skill[]>([])
	const [topTenSkillsToday, setTopTenSkillsToday] = useState<Skill[]>([])

	useEffect(() => {
		// Get today's data
		fetch("https://linkedin-job-tracker-api.azurewebsites.net/all/" + getToday()).then(res => {
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

	}, [])

	return (
		<Router>
			<Header />
			<Content>
				<Switch>
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
						<Category skillsToday={skillsToday} categoryArray={libraries} categoryName="Libraries" />
					</Route>
					<Route path="/categories/software">
						<Category skillsToday={skillsToday} categoryArray={software} categoryName="Software" />
					</Route>
					<Route path="/categories/other">
						<Category skillsToday={skillsToday} categoryArray={other} categoryName="Other keywords" />
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