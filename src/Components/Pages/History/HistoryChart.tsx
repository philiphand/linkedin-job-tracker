import React, { useState } from "react";
import styled from "styled-components"
import { DatedResult, Skill } from "../../../App";
import { PageTitle, Transparent } from "../../Shared/shared.style";
import { Chart } from 'react-charts'

interface Props {
    allSkillsHistory: [DatedResult];
}

interface ChartLine {
    label: string;
    data: [number[]]
}

const emptySkill: Skill = { skillName: "", searchResultSum: "" }

export const HistoryChart: React.FC<Props> = ({ allSkillsHistory }) => {
    const [topTenSkillsHistory, setTopTenSkillsHistory] = useState<[DatedResult]>([{ date: "", keywords: [emptySkill] }])


    const azureLine = allSkillsHistory.forEach(datedResult => {

    })

    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 10], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 100], [3, 6], [4, 4]]
            }
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    return (
        <Wrapper>
            <Transparent>
                <PageTitle>Chart</PageTitle>
                <HistoryWrapper>
                    <div
                        style={{
                            width: '700px',
                            height: '500px'
                        }}
                    >
                        <Chart data={data} axes={axes} dark />
                    </div>
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