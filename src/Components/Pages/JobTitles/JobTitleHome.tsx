import React from "react";
import styled from "styled-components"
import { Description, PageTitle, Transparent } from "../../Shared/shared.style";
import { jobTitles, separateUppercases } from "../../../Scripts/jobTitleHelper";
import { Link } from "react-router-dom";

let softwareDevelopers: string[] = []
let otherTitles: string[] = []

// Split job titles into two menus
for (let i = 0; i < jobTitles.length; i++) {
    if (i < 4) softwareDevelopers.push(jobTitles[i])
    if (i >= 4) otherTitles.push(jobTitles[i])
}

export const JobTitleHome: React.FC = () => {

    return (
        <Wrapper>
            <Transparent>
                <PageTitle>All job titles</PageTitle>
                <Description>Select a job title to see related skills that are frequently found in job postings</Description>
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
    width: 900px;
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