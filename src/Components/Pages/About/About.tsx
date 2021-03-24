import React from "react";
import styled from "styled-components";

export const About: React.FC = () => {
    return (
        <div>
            <h2>About this page</h2>
            <p>The web scraping and storage to the database started on 03.23.2021.</p>
            <p>All data is scraped from the Linkedin job board, with no filters enabled.</p>
            <p>Please keep in mind that the search accuracy has an unknown margin of error due to various reasons like duplicate job listings, multiple spellings of keywords and small sample sizes.</p>
            <p>The search accuracy will improve over time as the sample size grows.</p>
            <p>I will keep looking for ways to increase search accuracy and continously improve the page</p>
            <h3>Technologies used</h3>
            <p>Web scraping: BeautifulSoup4, Azure Functions for daily automated scraping </p>
            <p>Front end: React, TypeScript, Styled Components</p>
            <p>Back end: Node.js, Express, Azure App Service</p>
            <p>Storage: Azure Cosmos DB with it's included Table API</p>
            <p>Hosting: Azure App Service</p>
        </div>
    );
}

