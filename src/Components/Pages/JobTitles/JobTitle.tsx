import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { Description, SkillText, SumText, Transparent } from "../../Shared/shared.style";

interface Props {
    jobTitleSkillGroups: [[String[]]]
    jobTitle: String;
}

interface SkillCount {
    skillName: String;
    count: number;
}

// Dynamic component for any job title
// jobTitleSkillGroup contains the history of all skillGroups for the specific job title

export const JobTitle: React.FC<Props> = ({ jobTitleSkillGroups, jobTitle }) => {
    const [skillCounts, setSkillCounts] = useState<SkillCount[]>([])

    let numberOfListings = jobTitleSkillGroups.length

    jobTitleSkillGroups.forEach(listingsPerDay => {
        numberOfListings += listingsPerDay.length
    })

    useEffect(() => {
        let newArray: String[] = []
        jobTitleSkillGroups.forEach((arrayOfSkillGroups) => {
            arrayOfSkillGroups.forEach(skillGroup => {
                skillGroup.forEach(skill => {
                    if (skill === "Csharp") skill = "C#"
                    if (skill === "CICD") skill = "CI/CD"
                    if (skill === "Java ") skill = "Java"
                    newArray.push(skill)
                })
            });
        });

        let counts: any = {} // This function counts all occurences of each keyword and adds them together
        newArray.forEach(function (x) { counts[x.toString()] = (counts[x.toString()] || 0) + 1; })

        // Re-formats keyword object
        let countsArray: SkillCount[] = []
        for (const property in counts) {
            countsArray.push({ skillName: property, count: counts[property] })
        }
        countsArray.sort((a, b) => b.count - a.count);

        setSkillCounts(countsArray)
    }, [jobTitleSkillGroups])

    return (
        <Wrapper>
            <Transparent>
                <SkillTableWrapper>
                    <Title>{jobTitle}</Title>
                    <Description>Percentage of job postings where the specified keywords were found when searching for {jobTitle}</Description>
                    {
                        skillCounts.map(skill => {
                            const index = skillCounts.indexOf(skill)
                            if (index < 26) {
                                return (
                                    <SkillWrapper key={skillCounts.indexOf(skill)}>
                                        <SkillText>{skill.skillName}</SkillText>
                                        {Math.round(skill.count / numberOfListings * 100)}%
                                    </SkillWrapper>
                                )
                            }
                            return true
                        })
                    }
                </SkillTableWrapper>
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

const Title = styled.h1`
    padding-bottom: 2px;
    border-bottom: 3px solid white;
    margin: 10px;
    text-align: center;
    color: white;
`

const SkillWrapper = styled.div`
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
    width: 300px;
`

const SkillTableWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
    padding-bottom: 20px;
`