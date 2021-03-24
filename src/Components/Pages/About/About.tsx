import React from "react";
import styled from "styled-components";

export const About: React.FC = () => {
    return (
        <div>
            <h2>About this page</h2>
            <p>The web scraping and storage to the database started on 03.23.2021.</p>
            <p>All data is scraped from the Linkedin job board, with no filters enabled.</p>
            <p>Please keep in mind that the search accuracy has an unknown margin of error due to various reasons like duplicate job listings, multiple spellings of keywords and small sample sizes.</p>
            <p>The search accuracy will improve over time as the sample size grows and new solutions are developed.</p>
            <h3>Technologies used</h3>
            <p><b>Web scraping:</b> BeautifulSoup4, Azure Functions with a 24hr trigger</p>
            <p><b>Front end:</b> React, TypeScript, Styled Components</p>
            <p><b>Back end:</b> Node.js, Express, Azure App Service</p>
            <p><b>Storage:</b> Azure Cosmos Table DB and API</p>
            <p><b>Hosting:</b> Azure App Service</p>
        </div>
    );
}

