import React from "react";
import styled from "styled-components"
import { MenuButton } from "./MenuButton";
import { MenuOption } from "./MenuOption";


export const Header: React.FC = () => {
    return (
        <Wrapper>
            <Title>Most in-demand tech skills</Title>
            <MenuButton>
                <MenuOption name="History" url="/history" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="Trending" url="/trending" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="Today" url="/today/top/10" />
                <MenuOption name="Top 10" url="/today/top/10" />
                <MenuOption name="All" url="/today/all" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="Categories" url="/categories/languages" />
                <MenuOption name="Programming languages" url="/categories/languages" />
                <MenuOption name="Frameworks and libraries" url="/categories/libraries" />
                <MenuOption name="Software" url="/categories/software" />
                <MenuOption name="Other" url="/categories/other" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="Job titles" url="/programmer" />
                <MenuOption name="Programmer" url="/programmer" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="About" url="/about" />
            </MenuButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: black;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 70px;
`

const Title = styled.h2`
    height: 100%;
    position: absolute;
    left: 30px;
    color: white;
    display: flex;
`