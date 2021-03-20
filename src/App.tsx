import React from "react";
import styled from "styled-components";
import { Header } from "./Components/Header";
import { TopSkills } from "./Components/TopSkills";

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Content>
        <h2>Top 10 skills</h2>
        <TopSkills />
      </Content>
    </div>
  );
}

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`