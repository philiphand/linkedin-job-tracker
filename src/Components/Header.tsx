import React from "react";
import styled from "styled-components"


export const Header: React.FC = () => {
    return (
        <Wrapper>
            <Title>Most in-demand tech skills</Title>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: black;
    width: 100%;
    display: flex;
    align-items: center;
`

const Title = styled.h1`
    padding-left: 50px;
    color: white;
`