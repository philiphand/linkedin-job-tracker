import React from "react";
import styled from "styled-components"
import { DatedResult } from "../../../App";
import { PageTitle, Transparent, UnderTitle } from "../../Shared/shared.style";

interface Props {
    allSkillsHistory: [DatedResult];
}

export const Trends: React.FC<Props> = () => {
    //const [topTenSkillsHistory, setTopTenSkillsHistory] = useState<[DatedResult]>([{ date: "", keywords: [{ skillName: "", searchResultSum: "" }] }])

    // useEffect(() => {

    //     let topTenHistory: [DatedResult] = [{ date: "", keywords: [emptySkill] }]
    //     allSkillsHistory.forEach(allSkillsDay => {

    //         let counter = 0
    //         let topTenDay: DatedResult = { date: allSkillsDay.date, keywords: [emptySkill] }
    //         allSkillsDay.keywords.forEach(skill => {
    //             if (counter < 10) { topTenDay.keywords.push(skill) }
    //             counter++
    //         })
    //         counter = 0


    //         topTenHistory.push(topTenDay)
    //     })

    //     topTenHistory.splice(0, 2) // Removes inital placeholder values

    //     let sortedTopTenHistory = topTenHistory.sort((a: { date: string; }, b: { date: string; }) => parseFloat(b.date) - parseFloat(a.date));
    //     sortedTopTenHistory.reverse()

    //     setTopTenSkillsHistory(topTenHistory)
    //     console.log(topTenSkillsHistory)
    // }, [allSkillsHistory, topTenSkillsHistory])

    return (
        <Wrapper>
            <Transparent>
                <PageTitle>Trends</PageTitle>
                <UnderTitle>Coming soon!</UnderTitle>
                <HistoryWrapper>
                    {/* {
                        topTenSkillsHistory.map(array => {
                            let formattedDate = array.date.toString()
                            const month = formattedDate.substring(0, 2) + "."
                            const day = formattedDate.substring(2, 4) + "."
                            const year = formattedDate.substring(4, 8)
                            formattedDate = day + month + year

                            return (
                                <SkillDayWrapper key={topTenSkillsHistory.indexOf(array)}>
                                    <Date>{formattedDate}</Date>
                                    {
                                        array.keywords.map(skill => {
                                            return (
                                                <SkillWrapper key={array.keywords.indexOf(skill)}>
                                                    <SkillText>{array.keywords.indexOf(skill) + 1}. {skill.skillName}</SkillText>
                                                    <SumText>{`${skill.searchResultSum}`}</SumText>
                                                </SkillWrapper>
                                            )
                                        })
                                    }
                                </SkillDayWrapper>
                            )
                        })
                    } */}
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
    flex-direction: row;
`