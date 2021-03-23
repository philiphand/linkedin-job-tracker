import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { Skill } from "../../../App";
interface Props {
    jobTitleSkillGroups: [String[]]
    jobTitle: String;
}

interface SkillCount {
    skillName: String;
    count: number;
}

export const JobTitles: React.FC<Props> = ({ jobTitleSkillGroups, jobTitle }) => {

    const [skillCounts, setSkillCounts] = useState<SkillCount[]>([])

    useEffect(() => {
        let newArray: String[] = []
        jobTitleSkillGroups.forEach((skillGroup) => {
            skillGroup.forEach(skill => {
                newArray.push(skill)
            });
        });

        var counts: any = {} // This function counts all occurences of each keyword
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
            <Title>{jobTitle}</Title>
            {
                skillCounts.map(skill => {
                    return (
                        <SkillWrapper key={skillCounts.indexOf(skill)}>
                            <SkillText>
                                {skill.skillName}
                            </SkillText>
                            <SumText>
                                {skill.count}
                            </SumText>
                        </SkillWrapper>
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