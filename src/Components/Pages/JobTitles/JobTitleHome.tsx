import React from "react";
import styled from "styled-components"
import { PageTitle, Transparent } from "../../Shared/shared.style";
import { checkIfJobTitle, jobTitles } from "../../../Scripts/jobTitleHelper";
import { Link } from "react-router-dom";

interface Props {
    combinedJobTitleSkills: [[[String[]]]];
}

function separateUppercases(title: string) {
    return title.replace(/([A-Z])/g, ' $1').trim()
}

export const JobTitleHome: React.FC<Props> = ({ combinedJobTitleSkills }) => {

    console.log(combinedJobTitleSkills)

    return (
        <Wrapper>
            <Transparent>
                <PageTitle>All job titles</PageTitle>
                {
                    jobTitles.map((title) => {
                        return (
                            <StyledLink key={jobTitles.indexOf(title)} to={"/jobtitles/" + checkIfJobTitle(title)}>

                                <JobTitle>{separateUppercases(title)}</JobTitle>
                            </StyledLink>
                        )
                    })
                }
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

const StyledLink = styled(Link)`
    cursor: "default";
    text-decoration: none;
`