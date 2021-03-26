import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { Skill } from "../../../App";
import { divideToTens } from "../../../Scripts/divideToTens";
import { NavButton } from "../../Shared/NavButton/NavButton";
import { PageNumberDisplay } from "../../Shared/NavButton/PageNumberDisplay";
import { Description, NavButtonsWrapper, SkillText, SumText, Transparent } from "../../Shared/shared.style";

interface Props {
    allSkillsToday: [Skill];
    categoryArray: String[];
    categoryName: string;
}

const emptySkill: Skill = { skillName: "", searchResultSum: "" }

export const Category: React.FC<Props> = ({ allSkillsToday, categoryArray, categoryName }) => {
    const [categorySkillsToday, setCategorySkillsToday] = useState<Skill[]>([])
    const [numberOfPages, setNumberOfPages] = useState<number>(0)
    const [pageNumber, setPageNumber] = useState<number>(0)
    const [tensOfSkills, setTensOfSkills] = useState<[[Skill]]>([[emptySkill]])

    useEffect(() => {
        if (allSkillsToday.length > 0) {
            // First extract skills in the current category from all skills of today
            let skillsByCategory: Skill[] = []

            allSkillsToday.forEach(skill => {
                categoryArray.forEach(categorySkillName => {
                    if (skill.skillName === categorySkillName) {
                        skillsByCategory.push(skill)
                    }
                })
            })

            // Only update changes if they have changed

            if (skillsByCategory.length > 1 && categorySkillsToday[0] !== skillsByCategory[0]) setCategorySkillsToday(skillsByCategory)

            setNumberOfPages(categorySkillsToday.length % 10 === 0 ? categorySkillsToday.length / 10 : Math.floor(categorySkillsToday.length / 10) + 1)

            const tenSkillsArray = divideToTens(categorySkillsToday)

            if (tenSkillsArray.length > 0 && tensOfSkills[0][0] !== tenSkillsArray[0][0]) setTensOfSkills(tenSkillsArray)

        }
    }, [categoryArray, allSkillsToday, tensOfSkills, categorySkillsToday, numberOfPages, categoryName])

    return (
        <Wrapper>
            <Transparent>
                <Title>{categoryName}</Title>
                <Description>
                    Number of job postings for each keyword searched
                </Description>
                <SkillsWrapper>
                    {
                        // Wait for categorySkillsToday to change before attempting to re-render (or else the component won't re-render at all)
                        categorySkillsToday.indexOf(tensOfSkills[0][0]) !== -1 &&
                        tensOfSkills[pageNumber].map(skill => {
                            return (
                                <SkillWrapper key={categorySkillsToday.indexOf(skill)}>
                                    <SkillText>{categorySkillsToday.indexOf(skill) + 1}. {skill.skillName}</SkillText>
                                    <SumText>{`${skill.searchResultSum}`}</SumText>
                                </SkillWrapper>
                            )
                        })
                    }
                    {numberOfPages > 1 &&
                        <NavButtonsWrapper>
                            <NavButton direction="Prev" onClick={() => pageNumber > 0 && setPageNumber(pageNumber - 1)} />
                            <PageNumberDisplay pageNumber={pageNumber + 1} numberOfPages={numberOfPages} />
                            <NavButton direction="Next" onClick={() => pageNumber < numberOfPages - 1 && setPageNumber(pageNumber + 1)} />
                        </NavButtonsWrapper>
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