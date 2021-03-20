import React, { useEffect, useState } from "react";
import styled from "styled-components"
import fetch from "node-fetch"

export const TopSkills: React.FC = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        fetch("https://linkedin-job-tracker-api.azurewebsites.net/all/03192021").then(res => console.log(res))

    }, [])

    return (
        <Wrapper>
            <Title>Most in-demand tech skills</Title>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: black;
    width: 400px;
    margin-top: 100px;
`

const Title = styled.h1`
    color: white;
`