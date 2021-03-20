import React, { useEffect, useState } from "react";
import styled from "styled-components"
import fetch from "node-fetch"

interface Skill {
    skillName: string;
    searchResultSum: string;
}

export const TopSkills: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([])
    const [top10Skills, setTop10Skills] = useState<Skill[]>([])

    useEffect(() => {
        fetch("https://linkedin-job-tracker-api.azurewebsites.net/all/03192021").then(res => {
            res.json().then(data => {
                console.log(data)
                // Sorts all skills by searchResultSum in descending order
                data.entities.sort((a: { searchResultSum: string; }, b: { searchResultSum: string; }) => parseFloat(b.searchResultSum) - parseFloat(a.searchResultSum));
                setSkills(data.entities)

                let newArray = []
                for (let i = 0; i < 10; i++) {
                    newArray.push(data.entities[i])
                }
                setTop10Skills(newArray)
            })
        })

    }, [])


    return (
        <Wrapper>
            <Title>Todays top 10 skills in Norway</Title>
            {
                top10Skills.map(skill => {
                    console.log(skill)
                    return (
                        <SkillWrapper key={top10Skills.indexOf(skill)}>
                            <SkillText>{skills.indexOf(skill) + 1}. {skill.skillName}</SkillText>
                            <SumText>{`${skill.searchResultSum} search results `}</SumText>
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
    margin-top: 30px;
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
`

const SumText = styled.p`
    display: inline-block;
`