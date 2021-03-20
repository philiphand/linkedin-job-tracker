import React from "react";
import styled from "styled-components";
import { Header } from "./Components/HeaderMenu/Header";
import { TodayTopTen } from "./Components/Pages/Today/TodayTopTen";
import { TodayAll } from "./Components/Pages/Today/TodayAll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Content>
        <Switch>
          <Route path="/today/top/10">
            <TodayTopTen />
          </Route>
          <Route path="/today/all">
            <TodayAll />
          </Route>
        </Switch>
      </Content>
    </Router>
  );
}

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`