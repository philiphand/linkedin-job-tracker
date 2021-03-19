import React from "react";
import styled from "styled-components"


export const TopSkills: React.FC = () => {
    return (
        <Wrapper>
            <Title>Most in-demand tech skills</Title>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: black;
    width: 400px;
    margin-top: 100px;
`

const Title = styled.h1`
    padding-left: 50px;
    color: white;
`