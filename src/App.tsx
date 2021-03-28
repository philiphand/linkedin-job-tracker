import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./Components/HeaderMenu/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { getHistory, getYesterday } from "./Scripts/dateHelper";
import { api_url } from "./Scripts/api";
import { jobTitles, TitleShortHands } from "./Scripts/jobTitleHelper";
import { RouteList } from "./Components/RouteList/RouteList";
import TechHorizontal from "./Images/network2.jpg"
import TechVertical from "./Images/network2_swap.jpg"
import { Footer } from "./Components/Footer/Footer";

export interface Skill {
	skillName: String;
	searchResultSum: String;
}

export interface DatedResult {
	date: string;
	content: Skill[];
}

// Main component
// This is where all data is fetched from the API and stored in a "global state"
// No state management library is used, all state is simply passed as props
// This is because the application has at maximum 3 levels, 
// i.e. all components are at most 2 prop drills away from eachother
// All data is fetched once, to prevent loading times and server load when switching pages


// TODO: Move most of the data processing to the API instead

export const App: React.FC = () => {
	const [allSkillsHistory, setAllSkillsHistory] = useState<[DatedResult]>([{ date: "", content: [] }])
	const [allSkillsToday, setAllSkillsToday] = useState<Skill[]>([])

	// Job titles 
	const [devOpsSkills, setDevOpsSkills] = useState<[[String[]]]>([[[]]])
	const [frontEndSkills, setFrontEndSkills] = useState<[[String[]]]>([[[]]])
	const [backEndSkills, setBackEndSkills] = useState<[[String[]]]>([[[]]])
	const [fullStackSkills, setFullStackSkills] = useState<[[String[]]]>([[[]]])
	const [scientistSkills, setScientistSkills] = useState<[[String[]]]>([[[]]])
	const [combinedJobTitleSkills, setCombinedJobTitleSkills] = useState<[[[String[]]]]>([[[[]]]])


	useEffect(() => {
		const historyDates = getHistory()
		let allResults: any = []
		let datedResults: [DatedResult] = [{ date: "", content: [] }]


		// Fetch all keyword search results

		historyDates.forEach(date => {

			fetch(api_url + "all/" + date).then(res => {
				res.json().then(data => {

					// Sorts all skills by searchResultSum in descending order
					let result = data.entities.sort((a: { searchResultSum: string; }, b: { searchResultSum: string; }) => parseFloat(b.searchResultSum) - parseFloat(a.searchResultSum));

					// Handle incorrect skill names here (TODO: Move this to the API)
					result.forEach((entity: Skill) => {
						if (entity.skillName === "Csharp") entity.skillName = "C#"
						if (entity.skillName === "CICD") entity.skillName = "CI/CD"
					})

					if (result.length > 0) datedResults.push({ date: data.date, content: result })

					allResults.push(result)

					if (date === getYesterday()) {
						setAllSkillsToday(result) // Results from yesterday
					}
				})
			})
		})
		setAllSkillsHistory(datedResults)
		console.log(datedResults)


		// Fetch all job title searches

		let allResultsArray: [[[String[]]]] = [[[[]]]]
		jobTitles.forEach(title => {
			let allResults: [[String[]]] = [[[]]]

			historyDates.forEach(date => {
				fetch(api_url + "jobtitle/" + title + "/" + date).then(res => {
					res.json().then(data => {
						const skills = data.keywordGroups
						if (skills.length > 1) allResults.push(skills) // Don't add empty placeholder arrays
					})
				})
			})
			allResults.splice(0, 1) // Removes empty placeholder array


			if (title === TitleShortHands.devops) setDevOpsSkills(allResults)
			if (title === TitleShortHands.frontend) setFrontEndSkills(allResults)
			if (title === TitleShortHands.backend) setBackEndSkills(allResults)
			if (title === TitleShortHands.fullstack) setFullStackSkills(allResults)
			if (title === TitleShortHands.scientist) setScientistSkills(allResults)
			allResultsArray.push(allResults)
		})

		setCombinedJobTitleSkills(allResultsArray)
	}, [])

	return (
		<Router>
			<Header />
			<Content>
				<BackGround>
					<RouteList appData={{
						allSkillsHistory,
						allSkillsToday,
						devOpsSkills,
						frontEndSkills,
						backEndSkills,
						fullStackSkills,
						scientistSkills,
						combinedJobTitleSkills
					}} />
				</BackGround>
			</Content>
			<Footer />
		</Router>
	);
}

const Content = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

`

const BackGround = styled.div`
	width: 100%;
	background-image: url(${TechHorizontal});
	background-repeat: no-repeat;
	background-position: center top;
	background-size: 100%;
	
	@media only screen and (max-width: 1550px) {
		background-size: 150%;
	}

	@media only screen and (max-width: 1050px) {
		background-image: url(${TechVertical});
		background-size: 100%;
		background-repeat: repeat;
	}
`