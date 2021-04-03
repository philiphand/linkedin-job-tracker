import React from "react";
import styled from "styled-components"
import { PageTitle, Transparent } from "../../Shared/shared.style";
import { jobTitles } from "../../../Scripts/jobTitleHelper";
import { Link } from "react-router-dom";

function separateUppercases(title: string) {

    return title.replace(/([A-Z])/g, ' $1').trim()
}

export const JobTitleHome: React.FC = () => {

    return (
        <Wrapper>
            <Transparent>
                <PageTitle>All job titles</PageTitle>
                <JobTitlesWrapper>
                    {
                        jobTitles.map((title) => {
                            return (
                                <StyledLink key={jobTitles.indexOf(title)} to={"/jobtitles/" + title}>
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

    @keyframes fade {
        from {
            text-decoration-line: underline;
            text-decoration-thickness: 1px;
        }

        to {
            text-decoration-line: underline;
            text-decoration-thickness: 1px;
        }
    }
`