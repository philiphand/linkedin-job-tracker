import React from "react";
import styled from "styled-components";

export const About: React.FC = () => {
    return (
        <div>
            <h2>About this page</h2>
            <p>All search results are from the Linkedin job board, with no filters enabled.</p>
            <p>The majority of skills ({">"}95%) are shown as the exact same word used when searching, with some exceptions to increase the search accuracy.</p>
            <p>For any questions or feature requests (e.g. more countries or skills), contact me at philip.h.andersen@gmail.com</p>
        </div>
    );
}

