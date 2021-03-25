import React from "react";
import styled from "styled-components"
import { Transparent } from "../../Shared/shared.style";

interface Props {
    combinedJobTitleSkills: [[[String[]]]];
}

export const JobTitleHome: React.FC<Props> = ({ combinedJobTitleSkills }) => {

    return (
        <Wrapper>
            <Transparent>
                <Title>All job titles</Title>
                <p>List of all job titles</p>
            </Transparent>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 100%;
`

const Title = styled.h1`
    padding-bottom: 2px;
    border-bottom: 3px solid black;
    margin: 10px;
    text-align: center;
`