import React from "react";
import styled from "styled-components";

interface Props {
    direction: "Next" | "Prev";
    onClick: Function;
}

export const NavButton: React.FC<Props> = ({ direction, onClick }) => {
    return (
        <Button direction={direction} onClick={() => onClick()}>{direction}</Button>
    );
}

const Button = styled.button<{ direction: "Prev" | "Next" }>`
    border: 1px solid silver;
    border-radius: ${props => { return props.direction === "Prev" ? "15px 0px 0px 15px" : "0px 15px 15px 0px" }};
    background-color: rgba(0, 0, 0, 0.0);
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin: 0px;
    width: 80px;
    height: 50px;
    padding: 10px;
    margin: 10px;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }
`

