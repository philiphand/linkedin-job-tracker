import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./Components/HeaderMenu/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { getHistory, getYesterday } from "./Scripts/dateHelper";
import { api_url } from "./Scripts/api";
import { jobTitles, TitleShortHands } from "./Scripts/jobTitles";
import { RouteList } from "./Components/RouteList/RouteList";
import TechBackground from "./Images/tech.jpg"

export interface Skill {
	skillName: String;
	searchResultSum: String;
}

export interface DatedResult {
	date: number;
	content: Skill[];
}

// Main component
// This is where all data is fetched from the API and stored in a "global state"
// No state management library is used, all state is simply passed as props
// This is because the application has few "levels" and is relatively non-hierchial
// All data is fetched once, to prevent loading times when switching pages

export const App: React.FC = () => {
	const [allSkillsHistory, setAllSkillsHistory] = useState<[DatedResult]>([{ date: 0, content: [] }])
	const [allSkillsToday, setAllSkillsToday] = useState<Skill[]>([])
	const [topTenSkillsToday, setTopTenSkillsToday] = useState<Skill[]>([])

	// Job titles 
	const [devOpsSkills, setDevOpsSkills] = useState<[[String[]]]>([[[]]])
	const [frontEndSkills, setFrontEndSkills] = useState<[[String[]]]>([[[]]])
	const [backEndSkills, setBackEndSkills] = useState<[[String[]]]>([[[]]])
	const [fullStackSkills, setFullStackSkills] = useState<[[String[]]]>([[[]]])
	const [scientistSkills, setScientistSkills] = useState<[[String[]]]>([[[]]])


	useEffect(() => {
		const historyDates = getHistory()
		let allResults: any = []
		let datedResults: [DatedResult] = [{ date: 0, content: [] }]

		// WARNING
		// This loop could become expensive as the database grows
		// It fetches all records in the database table
		// TODO: Try to store some of the data directly in the app repository (For example month by month)

		historyDates.forEach(date => {

			fetch(api_url + "all/" + date).then(res => {
				res.json().then(data => {

					// Sorts all skills by searchResultSum in descending order
					let result = data.entities.sort((a: { searchResultSum: string; }, b: { searchResultSum: string; }) => parseFloat(b.searchResultSum) - parseFloat(a.searchResultSum));

					// Handle incorrect skill names here (TODO: Move this to the API)
					result.forEach((entity: Skill) => {
						if (entity.skillName === "Csharp") entity.skillName = "C#"
						if (entity.skillName === "CICD") entity.skillName = "CI/CD"
						if (entity.skillName === "AWS") entity.skillName = "Amazon Web Services"
					})

					datedResults.push({ date: data.date, content: result })
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
		setAllSkillsHistory(datedResults)
		console.log(allResults)

		jobTitles.forEach(title => {
			let allResults: [[String[]]] = [[[]]]
			historyDates.forEach(date => {
				fetch(api_url + "jobtitle/" + title + "/" + date).then(res => {
					res.json().then(data => {
						const skills = data.keywordGroups
						if (skills.length > 1) allResults.push(skills) // Don't add placeholder arrays
					})
				})
			})
			allResults.splice(0, 1)
			if (title === TitleShortHands.devops) setDevOpsSkills(allResults)
			if (title === TitleShortHands.frontend) setFrontEndSkills(allResults)
			if (title === TitleShortHands.backend) setBackEndSkills(allResults)
			if (title === TitleShortHands.fullstack) setFullStackSkills(allResults)
			if (title === TitleShortHands.scientist) setScientistSkills(allResults)
			// TODO: Combine all these and look for skill patterns (which skills are often seen together)
			console.log(title)
			console.log(allResults)
		})
	}, [])

	return (
		<Router>
			<Header />
			<Content>
				<RouteList appData={{
					allSkillsHistory,
					topTenSkillsToday,
					allSkillsToday,
					devOpsSkills,
					frontEndSkills,
					backEndSkills,
					fullStackSkills,
					scientistSkills
				}} />
			</Content>
		</Router>
	);
}

const Content = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	background-image: url(${TechBackground});
	background-repeat: no-repeat;
	background-size: 100%;
	background-position: center top;
`