import React from "react";
import { Route, Switch } from "react-router-dom";
import { Technologies } from "../Pages/About/Technologies";
import { JobTitleHome } from "../Pages/JobTitles/JobTitleHome";
import { JobTitle } from "../Pages/JobTitles/JobTitle";
import { Keywords } from "../Pages/Keywords/Keywords";
import { Trends } from "../Pages/History/Trends";
import { Scraping } from "../Pages/About/Scraping";
import { Home } from "../Pages/Home/Home";
import { HistoryChart } from "../Pages/History/HistoryChart";

interface AppData {
    allSkillsHistory: any;
}

interface Props {
    appData: AppData;
}


export const RouteList: React.FC<Props> = ({
    appData: {
        allSkillsHistory
    }
}) => {
    return (
        <Switch>
            <Route path="/history/chart">
                <HistoryChart />
            </Route>
            <Route path="/history/trends">
                <Trends allSkillsHistory={allSkillsHistory} />
            </Route>
            {/* <Route path="/trending">
                <Trending allSkillsHistory={allSkillsHistory} />
            </Route> */}
            <Route path="/skills/weekly/:category">
                <Keywords />
            </Route>
            <Route path="/jobtitles/home">
                <JobTitleHome />
            </Route>
            <Route path="/jobtitles/:jobTitle">
                <JobTitle />
            </Route>
            <Route path="/about/scraping">
                <Scraping />
            </Route>
            <Route path="/about/technologies">
                <Technologies />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}