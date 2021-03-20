import React from "react";
import styled from "styled-components";
import { Header } from "./Components/HeaderMenu/Header";
import { TopSkills } from "./Components/TopSkills";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Content>
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