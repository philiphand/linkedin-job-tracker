import React from "react";
import styled from "styled-components";
import { Transparent } from "../../Shared/shared.style";

export const Scraping: React.FC = () => {
    return (
        <Wrapper>
            <Transparent>
                <Title>Web scraping method</Title>
                <Infotext>
                    The web scraping and storage to the database started on 03.23.2021. <br />
                All data is scraped from the Linkedin job board, with only one filter enabled, which is location set to Norway.<br />
                Please keep in mind that the search accuracy has an unknown margin of error due to <br />
                various reasons like duplicate job listings, multiple spellings of keywords and small sample sizes. <br />
                The search accuracy will improve over time as the sample size grows and new solutions are developed.<br />
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
