import React from "react";
import styled from "styled-components";

export const Technologies: React.FC = () => {
    return (
        <Wrapper>
            <Content>
                <Title>Technologies used</Title>
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
    border: 1px solid silver;
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

const Infotext = styled.div`
    color: white;
    margin-left: 20px;
    font-size: 18px;
    line-height: 26px;
`

