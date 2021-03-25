import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { DatedResult } from "../../../App";
import { Transparent } from "../../Shared/shared.style";

interface Props {
    allSkillsHistory: [DatedResult];
}

export const History: React.FC<Props> = ({ allSkillsHistory }) => {
    const [topTenSkillsHistory, setTopTenSkillsHistory] = useState<[DatedResult]>([{ date: 0, content: [] }])

    useEffect(() => {

        let topTenHistory: [DatedResult] = [{ date: 0, content: [] }]
        allSkillsHistory.forEach(allSkillsDay => {

            let counter = 0
            let topTenDay: DatedResult = { date: allSkillsDay.date, content: [] }
            allSkillsDay.content.forEach(skill => {
                if (counter < 10) { topTenDay.content.push(skill) }
                counter++
            })
            counter = 0

            topTenHistory.push(topTenDay)
        })

        topTenHistory.splice(0, 2) // Removes inital placeholder values
        setTopTenSkillsHistory(topTenHistory)
    }, [allSkillsHistory])

    console.log(topTenSkillsHistory)


    return (
        <Wrapper>
            <Transparent>
                <Title>History</Title>
                <SubTitle>Will eventually be a line chart</SubTitle>
                <HistoryWrapper>
                    {
                        topTenSkillsHistory.map(array => {
                            let formattedDate = array.date.toString()
                            const month = formattedDate.substring(0, 2) + "."
                            console.log(month)
                            const day = formattedDate.substring(2, 4) + "."
                            console.log(day)
                            const year = formattedDate.substring(4, 8)
                            console.log(year)
                            formattedDate = day + month + year

                            return (
                                <SkillDayWrapper key={topTenSkillsHistory.indexOf(array)}>
                                    <Date>{formattedDate}</Date>
                                    {
                                        array.content.map(skill => {
                                            return (
                                                <SkillWrapper key={array.content.indexOf(skill)}>
                                                    <SkillText>{array.content.indexOf(skill) + 1}. {skill.skillName}</SkillText>
                                                    <SumText>{`${skill.searchResultSum}`}</SumText>
                                                </SkillWrapper>
                                            )
                                        })
                                    }
                                </SkillDayWrapper>
                            )
                        })
                    }
                </HistoryWrapper>
            </Transparent>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const HistoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    padding-bottom: 2px;
    border-bottom: 3px solid black;
    margin: 10px;
    text-align: center;
`

const SubTitle = styled.h3`
    text-align: center;
`

const Date = styled.p`
    margin-left: 10px;
`

const SkillDayWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    border: 1px solid black;
`

const SkillWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 140px;
`

const SkillText = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 5px;
`

const SumText = styled.p`
    display: inline-block;
`