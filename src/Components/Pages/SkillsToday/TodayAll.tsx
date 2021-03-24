import React from "react";
import styled from "styled-components"
import { Skill } from "../../../App";

interface Props {
    skillsToday: Skill[];
}

export const TodayAll: React.FC<Props> = ({ skillsToday }) => {

    return (
        <Wrapper>
            <Title>All of today's skills in Norway</Title>
            <Content>
                {
                    skillsToday.map(skill => {
                        return (
                            <SkillWrapper key={skillsToday.indexOf(skill)}>
                                <SkillText>{skillsToday.indexOf(skill) + 1}. {skill.skillName}</SkillText>
                                <SumText>{`${skill.searchResultSum} job listings`}</SumText>
                            </SkillWrapper>
                        )
                    })

                }
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10px;
`

const Title = styled.h1`
    padding-bottom: 2px;
    border-bottom: 3px solid black;
    margin: 10px;
    text-align: center;
`

const Content = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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