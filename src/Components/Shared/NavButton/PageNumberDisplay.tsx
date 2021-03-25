import React from "react";
import styled from "styled-components";

interface Props {
    pageNumber: number;
    numberOfPages: number;
}

export const PageNumberDisplay: React.FC<Props> = ({ pageNumber, numberOfPages }) => {
    return (
        <Wrapper>
            <Number>{pageNumber}/{numberOfPages}</Number>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    border: 1px solid silver;
    background-color: rgba(0, 0, 0, 0.0);
    margin: 0;
    max-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
`

const Number = styled.p`
    font-size: 20px;
    color: white;
    margin: 0px;
    padding: 0px;
    font-weight: bold;
`
