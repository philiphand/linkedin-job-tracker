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
    color: white;
    text-decoration: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: visible;
    background-color: rgba(0, 0, 0, 0);

    &:hover {
        animation-duration: 0.25s;
        animation-name: fade;
        text-decoration: underline;
    }

    @keyframes fade {
        from {
            text-decoration: none;
        }

        to {
            text-decoration: underline;
        }
    }
`