import React, { useEffect, useState } from "react";
import styled from "styled-components"

interface ProgrammerSkills {
    jobListingKeywords: [string[]];
}

interface Props {
    programmerSkills: ProgrammerSkills;
}

interface Skill {
    skillName: string;
    count: string;
}


export const JobTitles: React.FC<Props> = ({ programmerSkills }) => {
    const [combinedSkills, setCombinedSkills] = useState<String[]>([])
    const [skillCounts, setSkillCounts] = useState<Skill[]>([])

    useEffect(() => {
        let newArray: string[] = []
        programmerSkills.jobListingKeywords.forEach((keywords: any) => {
            keywords.forEach((keyword: string) => {
                newArray.push(keyword)
            });
        });

        var counts: any = {}
        // This function counts duplicate values
        newArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; })

        let countsArray = []
        for (const property in counts) {
            countsArray.push({ skillName: property, count: counts[property] })
        }
        countsArray.sort((a, b) => parseFloat(b.count) - parseFloat(a.count));

        setSkillCounts(countsArray)
        setCombinedSkills(newArray.sort())
    }, [programmerSkills])

    return (
        <Wrapper>
            <Title>Job titles</Title>
            {
                skillCounts.map(skill => {
                    console.log(skill)
                    return (
                        <p key={skillCounts.indexOf(skill)}>
                            {skill.skillName + " " + skill.count}
                        </p>
                    )
                })

            }
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin-top: 10px;
`

const Title = styled.h2`
    padding-bottom: 2px;
    border-bottom: 3px solid darkred;
    margin: 10px;
    text-align: center;
`

const SkillWrapper = styled.div`
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SkillText = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
`

const SumText = styled.p`
    display: inline-block;
`