import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./Components/HeaderMenu/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { getHistory } from "./Scripts/dateHelper";
import { api_url } from "./Scripts/api";
import { jobTitles, TitleShortHands } from "./Scripts/jobTitleHelper";
import { RouteList } from "./Components/RouteList/RouteList";
import TechHorizontal from "./Images/network2.jpg"
import TechVertical from "./Images/network2_swap.jpg"
import { Footer } from "./Components/Footer/Footer";

export interface Skill {
	skillName: string;
	searchResultSum: string;
}

export interface DatedResult {
	date: string;
	keywords: [Skill];
}

export interface ChartData {
	data: [[number, number]];
	averageSum: number;
	label: string;
}

export interface AllChartData {
	[skillName: string]: ChartData;
}

// TODO: Move most of the data processing to the API instead

export const App: React.FC = () => {
	const [allSkillsHistory, setAllSkillsHistory] = useState<[DatedResult]>([{ date: "", keywords: [{ skillName: "", searchResultSum: "" }] }])
	const [allSkillsToday, setAllSkillsToday] = useState<[Skill]>([{ skillName: "", searchResultSum: "" }])
	const [allChartData, setAllChartData] = useState<AllChartData>({ skillname: { label: "", averageSum: 0, data: [[0, 0]] } })

	// Job titles 
	const [devOpsSkills, setDevOpsSkills] = useState<[[String[]]]>([[[]]])
	const [frontEndSkills, setFrontEndSkills] = useState<[[String[]]]>([[[]]])
	const [backEndSkills, setBackEndSkills] = useState<[[String[]]]>([[[]]])
	const [fullStackSkills, setFullStackSkills] = useState<[[String[]]]>([[[]]])
	const [scientistSkills, setScientistSkills] = useState<[[String[]]]>([[[]]])
	const [combinedJobTitleSkills, setCombinedJobTitleSkills] = useState<[[[String[]]]]>([[[[]]]])


	useEffect(() => {

		fetch(api_url + "keywords/history").then(res => {
			res.json().then((keywordHistory: [DatedResult]) => {
				console.log(keywordHistory)
				setAllSkillsHistory(keywordHistory)

				console.log(keywordHistory[keywordHistory.length - 1])
				setAllSkillsToday(keywordHistory[keywordHistory.length - 1].keywords)
			})
		})

		fetch(api_url + "keywords/history/chart").then(res => {
			res.json().then((result: AllChartData) => {
				console.log(result)
				setAllChartData(result)
			})
		})

		const historyDates = getHistory()

		// Fetch all job titles
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