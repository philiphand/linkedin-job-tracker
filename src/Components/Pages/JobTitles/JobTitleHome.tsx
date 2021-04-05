import React from "react";
import styled from "styled-components"
import { PageTitle, Transparent, UnderTitle } from "../../Shared/shared.style";
import { jobTitles, separateUppercases } from "../../../Scripts/jobTitleHelper";
import { Link } from "react-router-dom";

let softwareDevelopers: string[] = []
let otherTitles: string[] = []

for (let i = 0; i < jobTitles.length; i++) {
    if (i < 4) softwareDevelopers.push(jobTitles[i])
    if (i >= 4) otherTitles.push(jobTitles[i])
}

export const JobTitleHome: React.FC = () => {

    return (
        <Wrapper>
            <Transparent>
                <PageTitle>All job titles</PageTitle>
                <UnderTitle>Software developers</UnderTitle>
                <JobTitlesWrapper>
                    {
                        softwareDevelopers.map((title) => {
                            return (
                                <StyledLink key={softwareDevelopers.indexOf(title)} to={"/jobtitles/" + title}>
                                    <JobTitle>{separateUppercases(title)}</JobTitle>
                                </StyledLink>
                            )
                        })
                    }
                </JobTitlesWrapper>
                <UnderTitle>Other job titles</UnderTitle>
                <JobTitlesWrapper>
                    {
                        otherTitles.map((title) => {
                            return (
                                <StyledLink key={otherTitles.indexOf(title)} to={"/jobtitles/" + title}>
                                    <JobTitle>{separateUppercases(title)}</JobTitle>
                                </StyledLink>
                            )
                        })
                    }
                </JobTitlesWrapper>
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

const StyledLink = styled(Link)`
    cursor: "default";
    text-decoration: none;
`

const JobTitlesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border: 1px solid silver;
    border-radius: 15px;
    margin: 10px;
`

const JobTitle = styled.h3`
    color: white;
    padding: 15px;
    margin: 0;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        text-decoration-thickness: 1px;
    }
`