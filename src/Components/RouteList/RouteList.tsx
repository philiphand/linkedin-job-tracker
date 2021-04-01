import React from "react";
import { Route, Switch } from "react-router-dom";
import { programmingLanguages, libraries, software, other } from "../../Scripts/categories";
import { Technologies } from "../Pages/About/Technologies";
import { Category } from "../Pages/Categories/Category";
import { JobTitleHome } from "../Pages/JobTitles/JobTitleHome";
import { JobTitle } from "../Pages/JobTitles/JobTitle";
import { SkillsToday } from "../Pages/SkillsToday/SkillsToday";
import { History } from "../Pages/History/History";
import { Scraping } from "../Pages/About/Scraping";
import { Home } from "../Pages/Home/Home";
import { HistoryChart } from "../Pages/History/HistoryChart";

interface AppData {
    allSkillsHistory: any;
    allSkillsToday: any;
    devOpsSkills: any;
    frontEndSkills: any;
    backEndSkills: any;
    fullStackSkills: any;
    scientistSkills: any;
    combinedJobTitleSkills: any;
}

interface Props {
    appData: AppData;
}


export const RouteList: React.FC<Props> = ({
    appData: {
        allSkillsHistory,
        allSkillsToday,
        devOpsSkills,
        frontEndSkills,
        backEndSkills,
        fullStackSkills,
        scientistSkills,
        combinedJobTitleSkills
    }
}) => {
    return (
        <Switch>
            <Route path="/history/chart">
                <HistoryChart allSkillsHistory={allSkillsHistory} />
            </Route>
            <Route path="/history">
                <History allSkillsHistory={allSkillsHistory} />
            </Route>
            {/* <Route path="/trending">
                <Trending allSkillsHistory={allSkillsHistory} />
            </Route> */}
            <Route path="/today/all">
                <SkillsToday skillsToday={allSkillsToday} title="All of today's skills" />
            </Route>
            <Route path="/categories/languages">
                <Category allSkillsToday={allSkillsToday} categoryArray={programmingLanguages} categoryName="Programming languages" />
            </Route>
            <Route path="/categories/libraries">
                <Category allSkillsToday={allSkillsToday} categoryArray={libraries} categoryName="Frameworks and libraries" />
            </Route>
            <Route path="/categories/software">
                <Category allSkillsToday={allSkillsToday} categoryArray={software} categoryName="Software" />
            </Route>
            <Route path="/categories/other">
                <Category allSkillsToday={allSkillsToday} categoryArray={other} categoryName="Other keywords" />
            </Route>
            <Route path="/jobtitles/devops">
                <JobTitle jobTitleSkillGroups={devOpsSkills} jobTitle="DevOps Engineer" />
            </Route>
            <Route path="/jobtitles/frontend">
                <JobTitle jobTitleSkillGroups={frontEndSkills} jobTitle="Front End Developer" />
            </Route>
            <Route path="/jobtitles/backend">
                <JobTitle jobTitleSkillGroups={backEndSkills} jobTitle="Back End Developer" />
            </Route>
            <Route path="/jobtitles/fullstack">
                <JobTitle jobTitleSkillGroups={fullStackSkills} jobTitle="Full Stack Developer" />
            </Route>
            <Route path="/jobtitles/scientist">
                <JobTitle jobTitleSkillGroups={scientistSkills} jobTitle="Data Scientist" />
            </Route>
            <Route path="/jobtitles">
                <JobTitleHome combinedJobTitleSkills={combinedJobTitleSkills} />
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