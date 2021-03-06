import React from "react";
import styled from "styled-components"
import { MenuButton } from "./MenuButton";
import { MenuOption } from "./MenuOption";
import NorwegianFlag from "./../../Images/Flag_of_Norway.png";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <Wrapper>
            <InfoText>Top skills in Norway</InfoText>
            <Flag src={NorwegianFlag} />
            <MenuButton>
                <MenuOption name="History" url="/history/chart" />
                <MenuOption name="Line chart" url="/history/chart" />
                {/* <MenuOption name="Trends" url="/history/trends" /> */}
            </MenuButton>
            <MenuButton>
                <MenuOption name="All skills" url="/skills/weekly/all" />
                <MenuOption name="This week" url="/skills/weekly/all" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="Job titles" url="/jobtitles/home" />
                {/* TODO: Iterate through jobtitles instead of hardcoding */}
                <MenuOption name="Software developers" url="/jobtitles/FullStackDeveloper" />
                <MenuOption name="Other titles" url="/jobtitles/DataScientist" />
                <MenuOption name="All titles" url="/jobtitles/home" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="Skill categories" url="/skills/weekly/languages" />
                <MenuOption name="Programming languages" url="/skills/weekly/languages" />
                <MenuOption name="Frameworks and libraries" url="/skills/weekly/frameworks" />
                <MenuOption name="Software" url="/skills/weekly/software" />
                <MenuOption name="Other" url="/skills/weekly/other" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="About" url="/" />
                <MenuOption name="Scraping method" url="/about/scraping" />
                <MenuOption name="Technologies" url="/about/technologies" />
            </MenuButton>
            <Link to="/">
                <HomeButton stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 512 512" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 19.27L25.637 249.638 19.27 256 32 268.73l6.363-6.367L256 44.727l217.637 217.636L480 268.73 492.73 256l-6.367-6.363zM96 48v107.273l64-64.002V48zm160 20.727l-192 192V486h64V320h96v166h224V260.727zM288 320h96v80h-96z"></path>
                </HomeButton>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 70px;
    border-bottom: 1px solid silver;
    background-color: black;
`

const HomeButton = styled.svg`
    position: absolute;
    right: 50px;
    top: 15px;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }

    @media only screen and (max-width: 1000px) {
		opacity: 0;
	}
`

const Flag = styled.img`
    position: absolute;
    height: 40px;
    width: auto;
    left: 20px;
    margin: 15px;

    @media only screen and (max-width: 1000px) {
		opacity: 0;
	}
`

const InfoText = styled.p`
    color: white;
    position: absolute;
    font-weight: bold;
    width: 80px;
    left: 90px;
    margin: 12px;
    font-size: 16px;

    @media only screen and (max-width: 1150px) {
		opacity: 0;
	}
`