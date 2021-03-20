import React from "react";
import styled from "styled-components"
import { Link, BrowserRouter as Router } from "react-router-dom";
import { MenuButton } from "./MenuButton";
import { MenuOption } from "./MenuOption";


export const Header: React.FC = () => {
    return (
        <Router>
            <Wrapper>
                <Title>Most in-demand tech skills</Title>
                <MenuButton>
                    <MenuOption name="History" url="/today/top/10" />
                </MenuButton>
                <MenuButton>
                    <MenuOption name="Trending" url="/today/top/10" />
                </MenuButton>
                <MenuButton>
                    <MenuOption name="Today" url="/today/top/10" />
                    <MenuOption name="Top 10" url="/today/top/10" />
                </MenuButton>
                <MenuButton>
                    <MenuOption name="Category" url="/today/top/10" />
                    <MenuOption name="Programming languages" url="/today/top/10" />
                </MenuButton>
                <MenuButton>
                    <MenuOption name="About" url="/today/top/10" />
                </MenuButton>
            </Wrapper>
        </Router>
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