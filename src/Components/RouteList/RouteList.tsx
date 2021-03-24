import React from "react";
import { Route, Switch } from "react-router-dom";
import { programmingLanguages, libraries, software, other } from "../../Scripts/categories";
import { About } from "../Pages/About/About";
import { Category } from "../Pages/Categories/Category";
import { JobTitleHome } from "../Pages/JobTitles/JobTitleHome";
import { JobTitles } from "../Pages/JobTitles/JobTitles";
import { SkillsToday } from "../Pages/SkillsToday/SkillsToday";
import { History } from "../Pages/History/History";

interface AppData {
    allSkillsHistory: any;
    topTenSkillsToday: any;
    allSkillsToday: any;
    devOpsSkills: any;
    frontEndSkills: any;
    backEndSkills: any;
    fullStackSkills: any;
    scientistSkills: any;
}

interface Props {
    appData: AppData;
}


export const RouteList: React.FC<Props> = ({
    appData: {
        allSkillsHistory,
        topTenSkillsToday,
        allSkillsToday,
        devOpsSkills,
        frontEndSkills,
        backEndSkills,
        fullStackSkills,
        scientistSkills
    }
}) => {
    return (
        <Switch>
            <Route path="/history">
                <History allSkillsHistory={allSkillsHistory} />
            </Route>
            {/* <Route path="/trending">
                <Trending allSkillsHistory={allSkillsHistory} />
            </Route> */}
            <Route path="/today/top/10">
                <SkillsToday skillsToday={topTenSkillsToday} title="Today's top 10" />
            </Route>
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
                <JobTitles jobTitleSkillGroups={devOpsSkills} jobTitle="DevOps Engineer" />
            </Route>
            <Route path="/jobtitles/frontend">
                <JobTitles jobTitleSkillGroups={frontEndSkills} jobTitle="Front End Developer" />
            </Route>
            <Route path="/jobtitles/backend">
                <JobTitles jobTitleSkillGroups={backEndSkills} jobTitle="Back End Developer" />
            </Route>
            <Route path="/jobtitles/fullstack">
                <JobTitles jobTitleSkillGroups={fullStackSkills} jobTitle="Full Stack Developer" />
            </Route>
            <Route path="/jobtitles/scientist">
                <JobTitles jobTitleSkillGroups={scientistSkills} jobTitle="Data Scientist" />
            </Route>
            <Route path="/jobtitles">
                <JobTitleHome />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
    );
}