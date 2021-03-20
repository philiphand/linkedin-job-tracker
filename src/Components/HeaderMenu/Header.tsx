import React from "react";
import styled from "styled-components"
import { MenuButton } from "./MenuButton";
import { MenuOption } from "./MenuOption";


export const Header: React.FC = () => {
    return (
        <Wrapper>
            <Title>Most in-demand tech skills</Title>
            <MenuButton>
                <MenuOption name="History" url="/history/week" />
                <MenuOption name="Coming soon!" url="/history/week" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="Trending" url="/trending" />
                <MenuOption name="Coming soon!" url="/trending" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="Today" url="/today/top/10" />
                <MenuOption name="Top 10" url="/today/top/10" />
                <MenuOption name="All" url="/today/all" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="Categories" url="/categories" />
                <MenuOption name="Programming languages" url="/categories/languages" />
                <MenuOption name="Frameworks and libraries" url="/categories/libraries" />
            </MenuButton>
            <MenuButton>
                <MenuOption name="About" url="/about" />
                <MenuOption name="Coming soon!" url="/about" />
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