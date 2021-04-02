import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { AllChartData } from "../../../App";
import { PageTitle, Transparent } from "../../Shared/shared.style";
import { Chart } from 'react-charts'
import { api_url } from "../../../Scripts/api";


export const HistoryChart: React.FC = () => {
    const [allChartData, setAllChartData] = useState<AllChartData>({
        // Chart needs to be initalized with any value other than 0 for the axis to display correct numbers
        skillname: { label: "", averageSum: 0, data: [[0, 1000]] }
    })

    useEffect(() => {
        fetch(api_url + "keywords/history/chart").then(res => {
            res.json().then((result: AllChartData) => {
                console.log(result)
                setAllChartData(result)
            })
        })
    }, [])


    const data = React.useMemo(
        () => {
            let chartData = []

            for (const skillName in allChartData) {
                const lineLabel = allChartData[skillName]["label"]
                let lineData = allChartData[skillName]["data"]

                let chartLine = { label: lineLabel, data: lineData }
                chartData.push(chartLine)
            }

            return chartData
        },
        [allChartData]
    )

    const axes = React.useMemo(
        () => {
            console.log(allChartData)
            return [
                { primary: true, type: 'utc', position: 'bottom' },
                { type: 'linear', position: 'left' }
            ]
        },
        [allChartData]
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
                        <Chart data={data} axes={axes} dark tooltip={{
                            anchor: "gridRight"
                        }} />
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