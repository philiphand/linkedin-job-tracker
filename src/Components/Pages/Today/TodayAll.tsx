import React, { useEffect, useState } from "react";
import styled from "styled-components"
import fetch from "node-fetch"

interface Skill {
    skillName: string;
    searchResultSum: string;
}

const getToday = () => {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0')
    const mm = String(now.getMonth() + 1).padStart(2, '0') // January is 0
    const yyyy = now.getFullYear()
    const today = mm + dd + yyyy

    return today
}

export const TodayAll: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([])

    useEffect(() => {
        // Get today's data
        fetch("https://linkedin-job-tracker-api.azurewebsites.net/all/" + getToday()).then(res => {
            res.json().then(data => {
                console.log(data)
                // Sorts all skills by searchResultSum in descending order
                data.entities.sort((a: { searchResultSum: string; }, b: { searchResultSum: string; }) => parseFloat(b.searchResultSum) - parseFloat(a.searchResultSum));
                setSkills(data.entities)
            })
        })

    }, [])


    return (
        <Wrapper>
            <Title>All search results in Norway</Title>
            {
                skills.map(skill => {
                    if (skill) {
                        return (
                            <SkillWrapper key={skills.indexOf(skill)}>
                                <SkillText>{skills.indexOf(skill) + 1}. {skill.skillName}</SkillText>
                                <SumText>{`${skill.searchResultSum} search results `}</SumText>
                            </SkillWrapper>
                        )
                    }
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