import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import { api_url } from "../../../Scripts/api";
import { separateUppercases } from "../../../Scripts/jobTitleHelper";
import { Description, SkillText, Transparent } from "../../Shared/shared.style";

interface KeywordGroupDate {
    date: string;
    keywordGroups: [[string]]
}
interface KeywordGroupsHistory {
    jobTitle: string;
    dates: [KeywordGroupDate]
}
interface SkillCount {
    skillName: String;
    count: number;
}

// Dynamic component for any job title
// jobTitleSkillGroup contains the history of all skillGroups for the specific job title

export const JobTitle: React.FC = () => {  // TODO: Check out dynamic route names for react-router (for use in RouteList)
    const [numberOfListings, setNumberOfListings] = useState<number>(0) // Used for calculating percentages
    //const [separatedKeywords, setSeparatedKeywords] = useState<string[]>([]) // Used for counting sum of each keyword
    const [skillCounts, setSkillCounts] = useState<SkillCount[]>([])
    let { jobTitle }: any = useParams();

    useEffect(() => {
        let separatedKeywords: string[] = []
        let listingsCounter = 0


        fetch(api_url + "jobtitle/" + jobTitle).then(res => {
            // TODO: Move most of this to the API
            res.json().then((keywordGroupsHistory: KeywordGroupsHistory) => {
                console.log(keywordGroupsHistory)
                keywordGroupsHistory.dates.forEach(keywordGroupsDate => {
                    keywordGroupsDate.keywordGroups.forEach(keywordGroup => {
                        keywordGroup.forEach(keyword => {
                            separatedKeywords.push(keyword)
                        });
                        listingsCounter += 1
                    });
                })
                let counts: any = {} // This function counts all occurences of each keyword and adds them together
                separatedKeywords.forEach(function (x) { counts[x.toString()] = (counts[x.toString()] || 0) + 1; })

                // Re-formats keyword object
                let countsArray: SkillCount[] = []
                for (const property in counts) {
                    countsArray.push({ skillName: property, count: counts[property] })
                }
                countsArray.sort((a, b) => b.count - a.count);

                setSkillCounts(countsArray)
                console.log(countsArray)
                setNumberOfListings(listingsCounter)
            })
        })
    }, [jobTitle])

    return (
        <Wrapper>
            <Transparent>
                <SkillTableWrapper>
                    <Title>{separateUppercases(jobTitle)}</Title>
                    <Description>Percentage of job postings where the specified keywords were found when searching for {separateUppercases(jobTitle)}</Description>
                    {
                        skillCounts.map(skill => {
                            const index = skillCounts.indexOf(skill)
                            if (index < 26) {
                                return (
                                    <SkillWrapper key={skillCounts.indexOf(skill)}>
                                        <SkillText>{skill.skillName}</SkillText>
                                        {Math.round(skill.count / numberOfListings * 100)}%
                                    </SkillWrapper>
                                )
                            }
                            return true
                        })
                    }
                </SkillTableWrapper>
            </Transparent>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 100%;
`

const Title = styled.h1`
    padding-bottom: 2px;
    border-bottom: 3px solid white;
    margin: 10px;
    text-align: center;
    color: white;
`

const SkillWrapper = styled.div`
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 20px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 10px;
    width: 300px;
`

const SkillTableWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
    padding-bottom: 20px;
`