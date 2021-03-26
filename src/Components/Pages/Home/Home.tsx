import React from "react";
import styled from "styled-components"
import { PageTitle, Transparent } from "../../Shared/shared.style";
import { InfoText } from "./../../Shared/shared.style"

export const Home: React.FC = () => {

    return (
        <Wrapper>
            <Transparent>
                <PageTitle>Welcome to LinkedIn-demand.net</PageTitle>
                <UnderTitle>The place for Norway's most in-demand tech skills</UnderTitle>
                <InfoText>A tool made specifically for job seekers in the tech business.</InfoText>
                <InfoText>Here you can find what tech skills are currently in high demand, updated daily!</InfoText>
                {/* <InfoText>Are you working towards a specific career path? Perhaps you will find the job title section useful.</InfoText>
                <InfoText>Do you want to stay ahead of the game and learn what skills are on the rise? </InfoText>
                <InfoText>Check out the history and trends section to see how the market is changing.</InfoText> */}
                <br />
                <InfoText><b>NB: This page is still in early development, more and improved features are coming.</b></InfoText>
            </Transparent>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 100%;
`

const UnderTitle = styled.h2`
    color: white;
`