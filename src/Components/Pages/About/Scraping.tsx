import React from "react";
import styled from "styled-components";
import { Transparent } from "../../Shared/shared.style";

export const Scraping: React.FC = () => {
    return (
        <Wrapper>
            <Transparent>
                <Title>Web scraping method</Title>
                <Infotext>

                    All data is scraped from the Linkedin job board, with only one filter enabled, which is location set to Norway.<br />
                    Please keep in mind that the search accuracy has a certain margin of error. <br />
                    This is due to various reasons like duplicate job listings, multiple spellings of keywords and small sample sizes. <br />
                    The first search and insertion to the database was completed on 24.03.2021. <br />
                    As more time passes, the sample size will grow and increase the accuracy of the data displayed.<br />
                    More features and search solutions will also be developed over time.
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
