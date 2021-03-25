import React from "react";
import styled from "styled-components"
import { PageTitle, Transparent } from "../../Shared/shared.style";
import { jobTitles } from "../../../Scripts/jobTitles";
import { Link } from "react-router-dom";

interface Props {
    combinedJobTitleSkills: [[[String[]]]];
}

export const JobTitleHome: React.FC<Props> = ({ combinedJobTitleSkills }) => {

    function checkJobTitle(title: string) {
        if (title === "devops") return "devops"
        if (title === "frontend") return "frontend"
        if (title === "backend") return "backend"
        if (title === "fullstack") return "fullstack"
        if (title === "scientist") return "scientist"
        return "devops"
    }

    return (
        <Wrapper>
            <Transparent>
                <PageTitle>All job titles</PageTitle>
                {
                    jobTitles.map((title) => {
                        return (
                            <Link to={"/jobtitles/" + checkJobTitle(title)} style={{ cursor: "default", textDecoration: "none", color: "black" }}>
                                <JobTitle>{title}</JobTitle>
                            </Link>
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