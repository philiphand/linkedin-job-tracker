import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { Skill } from "../../../App";
import { extractCategoryToday } from "../../../Scripts/categoryHelper";

interface Props {
    allSkillsToday: Skill[];
    categoryArray: String[];
    categoryName: String;
}

export const Category: React.FC<Props> = ({ allSkillsToday, categoryArray, categoryName }) => {
    const [categorySkills, setCategorySkills] = useState<Skill[]>([])

    useEffect(() => {
        setCategorySkills(extractCategoryToday(allSkillsToday, categoryArray)) // Move this helperfunction back here
    }, [categoryArray, allSkillsToday])

    return (
        <Wrapper>
            <Title>{categoryName} in Norway</Title>
            <SkillsWrapper>
                {
                    categorySkills.map(skill => {
                        return (
                            <SkillWrapper key={categorySkills.indexOf(skill)}>
                                <SkillText>{categorySkills.indexOf(skill) + 1}. {skill.skillName}</SkillText>
                                <SumText>{`${skill.searchResultSum} job listings `}</SumText>
                            </SkillWrapper>
                        )
                    })
                }
            </SkillsWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

const Title = styled.h2`
    padding-bottom: 2px;
    border-bottom: 3px solid black;
    margin: 10px;
    text-align: center;
`

const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SkillWrapper = styled.div`
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
`

const SkillText = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
`

const SumText = styled.p`
    display: inline-block;
`