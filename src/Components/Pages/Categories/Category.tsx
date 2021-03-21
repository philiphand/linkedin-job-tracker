import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { Skill } from "../../../App";
import { extractCategoryToday } from "../../../Scripts/categoryHelper";

interface Props {
    skillsToday: Skill[];
    categoryArray: String[];
    categoryName: String;
}

export const Category: React.FC<Props> = ({ skillsToday, categoryArray, categoryName }) => {
    const [languageSearchResults, setLanguageSearchResults] = useState<Skill[]>([])

    useEffect(() => {
        setLanguageSearchResults(extractCategoryToday(skillsToday, categoryArray))
    }, [categoryArray, skillsToday])

    return (
        <Wrapper>
            <Title>{categoryName} in Norway</Title>
            {
                languageSearchResults.map(skill => {
                    return (
                        <SkillWrapper key={languageSearchResults.indexOf(skill)}>
                            <SkillText>{languageSearchResults.indexOf(skill) + 1}. {skill.skillName}</SkillText>
                            <SumText>{`${skill.searchResultSum} job listings `}</SumText>
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