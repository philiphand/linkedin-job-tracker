import React, { useEffect, useState } from "react"
import { Route, useParams } from "react-router-dom";
import styled from "styled-components"
import { DatedResult, Skill } from "../../../App";
import { api_url } from "../../../Scripts/api";
import { capitalize, filterCategory } from "../../../Scripts/categoryHelper";
import { divideToTens } from "../../../Scripts/divideToTens";
import { NavButton } from "../../Shared/NavButton/NavButton";
import { PageNumberDisplay } from "../../Shared/NavButton/PageNumberDisplay";
import { Description, NavButtonsWrapper, SkillText, SumText, Transparent } from "../../Shared/shared.style";

const emptySkill: Skill = { skillName: "", searchResultSum: "" }

interface KeywordWeekSums {
    [skillName: string]: number;
}

interface RouteParams {
    category: string;
}

export const Keywords: React.FC = () => {
    const [numberOfPages, setNumberOfPages] = useState<number>(0)
    const [pageNumber, setPageNumber] = useState<number>(0)
    const [tensOfSkills, setTensOfSkills] = useState<[Skill[]]>([[]])
    const [skills, setSkills] = useState<Skill[]>([emptySkill])

    // Make this dynamic to support longer timeframes
    const daysBackInTime = 7

    let { category } = useParams<RouteParams>();

    useEffect(() => {
        setSkills([])

        fetch(api_url + "keywords/history").then(res => {
            res.json().then((keywordHistory: [DatedResult]) => {
                keywordHistory.reverse()
                let keywordWeek = []
                for (let i = 0; i < daysBackInTime; i++) {
                    keywordWeek.push(keywordHistory[i])
                }
                console.log(keywordWeek)

                // Sum together the weekly sums of all keywords
                let keywordWeekSums: KeywordWeekSums = {}
                keywordWeek.forEach(keywordDay => {
                    keywordDay.keywords.forEach(keyword => {
                        if (keywordWeekSums[keyword.skillName]) {
                            keywordWeekSums[keyword.skillName] += parseInt(keyword.searchResultSum)
                        } else {
                            keywordWeekSums[keyword.skillName] = parseInt(keyword.searchResultSum)
                        }
                    });
                })

                // Find the weekly averages of all keywords and sort them by weekly averages
                let keywordWeekAverages: Skill[] = []
                keywordWeekAverages.pop()
                for (const keywordName in keywordWeekSums) {
                    const keywordAverage = keywordWeekSums[keywordName] / daysBackInTime
                    keywordWeekAverages.push({ skillName: keywordName, searchResultSum: keywordAverage.toFixed(0).toString() })
                }
                keywordWeekAverages = keywordWeekAverages.sort((a, b) => parseFloat(b.searchResultSum) - parseFloat(a.searchResultSum));


                // Filter skills if a category name is in the url
                if (category !== "all") keywordWeekAverages = filterCategory(keywordWeekAverages, category)

                console.log(keywordWeekAverages)
                setSkills(keywordWeekAverages)
            })
        })

    }, [category])

    useEffect(() => {
        setNumberOfPages(skills.length % 10 === 0 ? skills.length / 10 : Math.floor(skills.length / 10) + 1)

        const tenSkillsArray = divideToTens(skills)

        setTensOfSkills(tenSkillsArray)
    }, [skills])

    return (
        <Wrapper>
            <Transparent>
                <Title>{(category === "all" ? capitalize(category) + " skills" : capitalize(category)) + " this week"}</Title>
                <Description>
                    Weekly average amount of job postings for each keyword searched
                </Description>
                {
                    skills.length > 1 && tensOfSkills[pageNumber] && tensOfSkills[pageNumber].map(skill => {
                        return (
                            <SkillWrapper key={skills.indexOf(skill)}>
                                <SkillText>{skills.indexOf(skill) + 1}. {skill.skillName}</SkillText>
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
            </Transparent>
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
