import React from "react"
import styled from "styled-components"
import { Skill } from "../../../App";

interface Props {
    skillsToday: Skill[];
    title: String;
}

export const SkillsToday: React.FC<Props> = ({ skillsToday, title }) => {

    return (
        <Wrapper>
            <Content>
                <Title>{title}</Title>
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

const Content = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid silver;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 600px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
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
`

const SkillText = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
    color: white;
    width: 300px;
`

const SumText = styled.p`
    display: inline-block;
    color: white;
`