import React from "react";
import styled from "styled-components"
import { MenuButton } from "./MenuButton";
import { MenuOption } from "./MenuOption";
import NorwegianFlag from "./../../Images/Flag_of_Norway.png";

export const Header: React.FC = () => {
    return (
        <Wrapper>
            <MenuButton>
                <MenuOption name="History" url="/history" />
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
                <MenuOption name="About" url="/about" />
            </MenuButton>
            <InfoText>All stats are scraped from the LinkedIn job board, filtered by jobs in Norway</InfoText>
            <Flag src={NorwegianFlag} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: black;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 70px;
`

const Title = styled.h2`
    height: 100%;
    position: absolute;
    left: 30px;
    color: white;
    display: flex;
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