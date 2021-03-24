import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { DatedResult } from "../../../App";

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
            <Title>History</Title>
            <SubTitle>Will eventually be a line chart</SubTitle>

            <HistoryWrapper>
                {
                    topTenSkillsHistory.map(array => {
                        // let formattedDate = array.date.toString()
                        // const month = formattedDate.substring(0, 2) + "."
                        // const day = formattedDate.substring(2, 2) + "."
                        // const year = formattedDate.substring(4, 4)
                        // formattedDate = day + month + year

                        return (
                            <SkillDayWrapper key={topTenSkillsHistory.indexOf(array)}>
                                <p>{array.date}</p>
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
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
`

const HistoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    padding-bottom: 2px;
    margin: 10px;
    text-align: center;
`

const SubTitle = styled.h3`
    text-align: center;
`


const SkillDayWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
`

const SkillWrapper = styled.div`
    border-bottom: 1px solid gray;
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