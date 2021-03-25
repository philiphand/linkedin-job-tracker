import React from "react";
import styled from "styled-components"
import { Skill } from "../../../App";
import { Transparent } from "../../Shared/shared.style";

interface Props {
    allSkillsHistory: [Skill[]];
}

export const Trends: React.FC<Props> = ({ allSkillsHistory }) => {

    return (
        <Wrapper>
            <Transparent>
                <Title>Trends in Norway</Title>
                {/* {
                skillsToday.map(skill => {
                    return (
                        <div key={skillsToday.indexOf(skill)}>
                            <p>{skillsToday.indexOf(skill) + 1}. {skill.skillName}</p>
                            <p>{`${skill.searchResultSum} job listings`}</p>
                        </div>
                    )
                })

            } */}
            </Transparent>
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