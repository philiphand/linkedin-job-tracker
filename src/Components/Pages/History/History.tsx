import React from "react";
import styled from "styled-components"
import { Skill } from "../../../App";

interface Props {
    allSkillsHistory: Skill[][];
}

export const History: React.FC<Props> = ({ allSkillsHistory }) => {

    return (
        <Wrapper>
            <Title>History</Title>

            <HistoryWrapper>
                {
                    allSkillsHistory.map(array => {
                        return (
                            <div>
                                {
                                    array.map(skill => {
                                        return (
                                            <SkillWrapper key={array.indexOf(skill)}>
                                                <SkillText>{array.indexOf(skill) + 1}. {skill.skillName}</SkillText>
                                                <SumText>{`${skill.searchResultSum} job listings`}</SumText>
                                            </SkillWrapper>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </HistoryWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
`

const HistoryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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