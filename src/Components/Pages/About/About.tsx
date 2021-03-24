import React from "react";
import styled from "styled-components";

export const About: React.FC = () => {
    return (
        <Wrapper>
            <Content>
                <Title>About this page</Title>
                <Infotext>
                    The web scraping and storage to the database started on 03.23.2021. <br />
                All data is scraped from the Linkedin job board, with no filters enabled.<br />
                Please keep in mind that the search accuracy has an unknown margin of error due to <br />
                various reasons like duplicate job listings, multiple spellings of keywords and small sample sizes. <br />
                The search accuracy will improve over time as the sample size grows and new solutions are developed.<br />
                </Infotext>
                <UnderTitle>Technologies used</UnderTitle>
                <Infotext>
                    <b>Web scraping:</b> BeautifulSoup4, Azure Functions with a 24hr trigger <br />
                    <b>Front end:</b> React, TypeScript, Styled Components <br />
                    <b>Back end:</b> Node.js, Express, Azure App Service<br />
                    <b>Storage:</b> Azure Cosmos Table DB and API<br />
                    <b>Hosting:</b> Azure App Service<br />
                </Infotext>
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 800px;
`

const Content = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 15px;
    padding: 10px;
    padding-bottom: 20px;
    margin: 30px;
`


const Title = styled.h1`
    padding-bottom: 2px;
    border-bottom: 3px solid white;
    margin: 10px;
    color: white;
`

const UnderTitle = styled.h2`
    padding-bottom: 2px;
    border-bottom: 3px solid white;
    margin: 10px;
    color: white;
`

const Infotext = styled.div`
    color: white;
    margin-left: 20px;
    font-size: 18px;
`

