import React from "react";
import styled from "styled-components"
import { MenuButton } from "./MenuButton";
import { MenuOption } from "./MenuOption";
import NorwegianFlag from "./../../Images/Flag_of_Norway.png";

export const Header: React.FC = () => {
    return (
        <Wrapper>
            <InfoText>All stats are scraped from the LinkedIn job board, filtered by jobs in Norway</InfoText>
            <Flag src={NorwegianFlag} />
            <MenuButton>
                <MenuOption name="History" url="/history/chart" />
                <MenuOption name="Chart" url="/history/chart" />
                <MenuOption name="Table" url="/history/table" />
            </MenuButton>
            {/* <MenuButton>
                <MenuOption name="Trending" url="/trending" />
            </MenuButton> */}
            <MenuButton>
                <MenuOption name="Today" url="/today/top/10" />
                <MenuOption name="Top 10" url="/today/top/10" />
                <MenuOption name="All" url="/today/all" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="Job titles" url="/jobtitles" />
                <MenuOption name="Full Stack Developer" url="/jobtitles/fullstack" />
                <MenuOption name="Back End Developer" url="/jobtitles/backend" />
                <MenuOption name="Front End Developer" url="/jobtitles/frontend" />
                <MenuOption name="DevOps Engineer" url="/jobtitles/devops" />
                <MenuOption name="Data Scientist" url="/jobtitles/scientist" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="Categories" url="/categories/languages" />
                <MenuOption name="Programming languages" url="/categories/languages" />
                <MenuOption name="Frameworks and libraries" url="/categories/libraries" />
                <MenuOption name="Software" url="/categories/software" />
                <MenuOption name="Other" url="/categories/other" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="About" url="/about/search" />
                <MenuOption name="Scraping method" url="/about/scraping" />
                <MenuOption name="Technologies" url="/about/technologies" />
            </MenuButton>
            <HomeButton onClick={() => window.location.replace("/")} stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 512 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 19.27L25.637 249.638 19.27 256 32 268.73l6.363-6.367L256 44.727l217.637 217.636L480 268.73 492.73 256l-6.367-6.363zM96 48v107.273l64-64.002V48zm160 20.727l-192 192V486h64V320h96v166h224V260.727zM288 320h96v80h-96z"></path>
            </HomeButton>
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
    top: 10px;

    &:hover {
        cursor: pointer;
    }
`

const Flag = styled.img`
    position: absolute;
    height: 50px;
    width: auto;
    left: 20px;
    margin: 10px;
`

const InfoText = styled.p`
    color: white;
    position: absolute;
    width: 185px;
    left: 110px;
    margin: 5px;
    font-size: 14px;
`