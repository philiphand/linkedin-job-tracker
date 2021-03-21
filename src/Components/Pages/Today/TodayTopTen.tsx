import React from "react"
import styled from "styled-components"
import { Skill } from "../../../App"

interface Props {
    topTenSkillsToday: Skill[];
}

export const TodayTopTen: React.FC<Props> = ({ topTenSkillsToday }) => {

    return (
        <Wrapper>
            <Title>Today's top 10 skills in Norway</Title>
            {
                topTenSkillsToday.map(skill => {
                    return (
                        <SkillWrapper key={topTenSkillsToday.indexOf(skill)}>
                            <SkillText>{topTenSkillsToday.indexOf(skill) + 1}. {skill.skillName}</SkillText>
                            <SumText>{`${skill.searchResultSum} job listings`}</SumText>
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