import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { Skill } from "../../../App";
import { extractCategoryToday } from "../../../Scripts/categoryHelper";
import { Transparent } from "../../Shared/shared.style";

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
            <Transparent>
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
            </Transparent>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`

const Title = styled.h1`
    padding-bottom: 2px;
    border-bottom: 3px solid white;
    margin: 10px;
    text-align: center;
    color: white;
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
    color: white;
`

const SumText = styled.p`
    display: inline-block;
    color: white;
`