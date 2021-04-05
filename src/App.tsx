import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./Components/HeaderMenu/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { api_url } from "./Scripts/api";
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

	useEffect(() => {

		fetch(api_url + "keywords/history").then(res => {
			res.json().then((keywordHistory: [DatedResult]) => {
				console.log(keywordHistory)
				setAllSkillsHistory(keywordHistory)
			})
		})

	}, [])

	return (
		<Router>
			<Header />
			<Content>
				<BackGround>
					<RouteList appData={{
						allSkillsHistory
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