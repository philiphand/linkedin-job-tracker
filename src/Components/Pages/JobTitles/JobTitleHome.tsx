import React from "react";
import styled from "styled-components"
import { PageTitle, Transparent } from "../../Shared/shared.style";
import { checkIfJobTitle, countSingleSkills, jobTitles, SkillCount } from "../../../Scripts/jobTitleHelper";
import { Link } from "react-router-dom";

interface Props {
    combinedJobTitleSkills: [[[string[]]]];
}

function separateUppercases(title: string) {

    return title.replace(/([A-Z])/g, ' $1').trim()
}

export const JobTitleHome: React.FC<Props> = ({ combinedJobTitleSkills }) => {

    let singleSkillsCombined: string[] = []
    let numberOfPostings: number = 0
    combinedJobTitleSkills.forEach(jobTitleSkillGroupsHistory => {
        jobTitleSkillGroupsHistory.forEach(jobTitleSkillGroupsDay => {
            numberOfPostings += jobTitleSkillGroupsDay.length
            jobTitleSkillGroupsDay.forEach(skillGroups => {
                skillGroups.forEach(skill => {
                    if (skill === "Csharp") skill = "C#"
                    if (skill === "CICD") skill = "CI/CD"
                    if (skill === "Amazon Web Services") skill = "AWS"
                    if (skill === "Java ") skill = "Java"
                    if (skill === "Google Cloud") skill = "GCP"
                    singleSkillsCombined.push(skill)
                })
            })
        })
    })

    const countedSkills = countSingleSkills(singleSkillsCombined)

    let topSkills: SkillCount[] = []
    countedSkills.forEach(skill => {
        if (topSkills.length < 12) topSkills.push(skill)
    })

    return (
        <Wrapper>
            <Transparent>
                <PageTitle>All job titles</PageTitle>
                <JobTitlesWrapper>
                    {
                        jobTitles.map((title) => {
                            return (
                                <StyledLink key={jobTitles.indexOf(title)} to={"/jobtitles/" + checkIfJobTitle(title)}>
                                    <JobTitle>{separateUppercases(title)}</JobTitle>
                                </StyledLink>
                            )
                        })
                    }
                </JobTitlesWrapper>
                <UnderTitle>Combined analysis</UnderTitle>
                <Description>Percentage of job postings where the specified keywords were found (from search results of all job titles combined)</Description>
                <TopSkillsWrapper>
                    {
                        topSkills.map(skill => {
                            return (
                                <TopSkillWrapper key={countedSkills.indexOf(skill)}>
                                    <Percentage>
                                        {Math.round(skill.count / numberOfPostings * 100)}%
                                    </Percentage>
                                    <SkillName>
                                        {skill.skillName}
                                    </SkillName>
                                </TopSkillWrapper>
                            )
                        })
                    }
                </TopSkillsWrapper>
                <Description>Based on {singleSkillsCombined.length} keyword occurences throughout {numberOfPostings} job postings</Description>
            </Transparent>
        </Wrapper>
    );
}

const UnderTitle = styled.h2`
    color: white;
    margin: 10px;
    margin-bottom: 0px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 100%;
`

const TopSkillsWrapper = styled.div`
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid silver;
    border-radius: 15px;
    padding-left: 30px;
    margin-top: 10px;
`

const TopSkillWrapper = styled.div`
    width: 200px;
    color: white;
    display: flex;
    align-items: center;
`

const Percentage = styled.p`
    color: white;
    font-size: 30px;
    display: inline-block;
`

const Description = styled.p`
    font-size: 16px;
    color: white;
    margin-top: 5px;
    margin-bottom: 0px;
`

const SkillName = styled.p`
    color: white; 
    font-size: 20px;
    display: inline-block;
    margin-left: 10px;
    font-weight: bold;
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