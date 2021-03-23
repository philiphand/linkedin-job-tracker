import React, { useEffect, useState } from "react";
import styled from "styled-components"

interface Props {
    programmerSkills: any;
}

export const JobTitles: React.FC<Props> = ({ programmerSkills }) => {
    const [skillCounts, setSkillCounts] = useState([])

    let countingArray: any = {}

    useEffect(() => {

    }, [])

    return (
        <Wrapper>
            <Title>Job titles</Title>
            {/* {
                skillsToday.map(skill => {
                    return (
                        <SkillWrapper key={skillsToday.indexOf(skill)}>
                            <SkillText>{skillsToday.indexOf(skill) + 1}. {skill.skillName}</SkillText>
                            <SumText>{`${skill.searchResultSum} job listings`}</SumText>
                        </SkillWrapper>
                    )
                })

            } */}
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