import React from "react";
import styled from "styled-components";

export const About: React.FC = () => {
    return (
        <div>
            <h2>About this page</h2>
            <p>All search results are from the Linkedin job board, with no filters enabled.</p>
            <p>All keywords shown are exactly the same as the word used when searching, with one exception, "C" is actually the results from searching "C programming", as this leads to drastically more accurate results.</p>
            <p>This page is still in development, more features will be added eventually.</p>
            <p>More countries coming soon.</p>
            <p>For any questions or feature requests, contact me at philip.h.andersen@gmail.com</p>
        </div>
    );
}

