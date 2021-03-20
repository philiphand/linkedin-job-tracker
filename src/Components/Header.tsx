import React from "react";
import styled from "styled-components"


export const Header: React.FC = () => {
    return (
        <Wrapper>
            <Title>Most in-demand tech skills</Title>
            <MenuButton>Trending</MenuButton>
            <MenuButton>Top 10</MenuButton>
            <MenuButton>All</MenuButton>
            <MenuButton>History</MenuButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: black;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2`
    position: absolute;
    left: 0px;
    padding: 20px;
    color: white;
`

const MenuButton = styled.button`
    height: 50px;
    font-size: 20px;
    width: 150px;
    background-color: black;
    color: white;
    border: none;
    outline: none;

    &:hover {
        color: darkred;
    }
`