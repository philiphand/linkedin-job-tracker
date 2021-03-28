import React from "react";
import styled from "styled-components"


export const Footer: React.FC = () => {


    return (
        <Wrapper>
            <Frame>
                <WhiteLink href="https://www.freepik.com/vectors/background" target="_blank" rel="noreferrer">Background vector created by freepik - www.freepik.com</WhiteLink>
            </Frame>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

const Frame = styled.div`
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid silver;
    border-radius: 15px 15px 0px 0px;
    border-bottom: none;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 6px;
`

const WhiteLink = styled.a`
    color: white;
    font-size: 14px;
    margin: 0;
    padding: 0;
    text-decoration: none;

    &:hover {
        opacity: 0.5;
        text-decoration: underline;
    }
`
