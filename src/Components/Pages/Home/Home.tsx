import React from "react";
import styled from "styled-components"
import { PageTitle, Transparent } from "../../Shared/shared.style";
import { InfoText } from "./../../Shared/shared.style"

export const Home: React.FC = () => {

    return (
        <Wrapper>
            <Transparent>
                <PageTitle>Welcome to LinkedIn-demand.net</PageTitle>
                <UnderTitle>An overview of Norway's most in-demand tech skills</UnderTitle>
                <InfoText>Made specifically for job seekers in the tech business.</InfoText>
                <InfoText>Here you can find what tech skills are currently in high demand, updated daily!</InfoText>
                <InfoText>All data is from <InvisibleLink href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">LinkedIn.com</InvisibleLink>, updated daily!</InfoText>
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

const InvisibleLink = styled.a`
    text-decoration: none;
    color: white;

    &:hover {
        text-decoration: underline;
    }
`

