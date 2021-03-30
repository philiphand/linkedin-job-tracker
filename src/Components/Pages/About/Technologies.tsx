import React from "react";
import styled from "styled-components";
import { Transparent } from "../../Shared/shared.style";

export const Technologies: React.FC = () => {
    return (
        <Wrapper>
            <Transparent>
                <Title>Technologies used</Title>
                <Infotext>
                    <b>Web scraping:</b> Python, BeautifulSoup4, Azure Time Trigger Function<br />
                    <b>Front end:</b> React, TypeScript, Styled Components<br />
                    <b>Back end:</b> Node.js, Express, Cosmos DB Table API<br />
                    <b>Storage:</b> Cosmos Table Database<br />
                    <b>Hosting:</b> Azure App Service<br />
                </Infotext>
            </Transparent>
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

const Title = styled.h1`    padding-bottom: 2px;
    border-bottom: 3px solid white;
    margin: 10px;
    color: white;
`

const Infotext = styled.div`
    color: white;
    margin-left: 20px;
    font-size: 18px;
    line-height: 30px;
`

