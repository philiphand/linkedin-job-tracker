import React from "react";
import styled from "styled-components";
import { Transparent } from "../../Shared/shared.style";

export const Scraping: React.FC = () => {
    return (
        <Wrapper>
            <Transparent>
                <Title>Web scraping method</Title>
                <Infotext>
                    All data is scraped from the Linkedin job board, with only one filter enabled, which is location set to Norway.<br /><br />

                    There are currently two different scraping methods in use: <br />
                    1. Searching for a keyword and scraping the amount of search results<br />
                    2. Searching for a job title and going through all job postings individually and scraping all keywords found<br /><br />

                    Please keep in mind that the accuracy of the collected data has a certain margin of error, . <br />
                    There are many reasons for this, e.g. duplicate job listings, multiple spellings of keywords, small sample sizes and of course inaccuracy in LinkedIn's own search engine.<br />
                    As more time passes, the sample size will grow and increase the accuracy of the data displayed.<br />
                    At the moment there is support for over 30 different spellings, along with some other small adjustments to increase the accuracy.<br />
                    More search solutions will be developed over time to further increase the accuracy of the data.
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
    font-size: 16px;
    line-height: 20px;
    max-width: 750px;
`
