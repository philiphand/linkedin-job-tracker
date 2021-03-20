import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export interface MenuOptionProps {
    name: string;
    url: string;
}

export const MenuOption: React.FC<MenuOptionProps> = ({ name, url }) => {
    return (
        <Link to={url} style={{ cursor: "default", textDecoration: "none", color: "black" }}>
            <Name>{name}</Name>
        </Link>
    );
}

const Name = styled.p`
    height: 70px;
    background-color: black;
    color: white;
    text-decoration: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:hover {
        animation-duration: 0.4s;
        animation-name: fade;
        color: darkred;
        text-decoration: underline;
    }

    @keyframes fade {
        from {
            color: white;
            text-decoration: none;
        }

        to {
            color: darkred;
            text-decoration: underline;
        }
    }
`