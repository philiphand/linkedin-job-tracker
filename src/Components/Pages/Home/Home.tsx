import React from "react";
import styled from "styled-components"
import { PageTitle, Transparent } from "../../Shared/shared.style";
import { InfoText } from "./../../Shared/shared.style"

export const Home: React.FC = () => {

    return (
        <Wrapper>
            <Transparent>
                <PageTitle>Welcome</PageTitle>
                <UnderTitle>This website provides an overview of Norway's most in-demand tech skills</UnderTitle>
                <InfoText>A useful tool for programmers wondering what technologies to learn next.</InfoText>
                <InfoText>All data is updated daily with data scraped from the <Link href="https://www.linkedin.com/jobs/" target="_blank" rel="noreferrer">LinkedIn job board</Link>.</InfoText>
                <br />
                <InfoText><b>More features are currently in development</b></InfoText>
            </Transparent>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 100%;
`

const UnderTitle = styled.h2`
    color: white;
`

const Link = styled.a`
    text-decoration: underline;
    color: white;

    &:hover {
        text-decoration: underline;
    }
`

