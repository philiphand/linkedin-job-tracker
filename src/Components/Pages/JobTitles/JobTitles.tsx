import React, { useEffect, useState } from "react";
import styled from "styled-components"
interface Props {
    jobTitleSkillGroups: [[String[]]]
    jobTitle: String;
}

interface SkillCount {
    skillName: String;
    count: number;
}


export const JobTitles: React.FC<Props> = ({ jobTitleSkillGroups, jobTitle }) => {
    const [skillCounts, setSkillCounts] = useState<SkillCount[]>([])
    const [topFiveSkills, setTopFiveSkills] = useState<String[]>([])

    let numberOfListings = jobTitleSkillGroups.length
    jobTitleSkillGroups.forEach(listingsPerDay => {
        numberOfListings += listingsPerDay.length
    })

    useEffect(() => {
        let newArray: String[] = []
        jobTitleSkillGroups.forEach((arrayOfSkillGroups) => {
            arrayOfSkillGroups.forEach(skillGroup => {
                skillGroup.forEach(skill => {
                    if (skill === "Csharp") skill = "C#"
                    if (skill === "CICD") skill = "CI/CD"
                    if (skill === "Java ") skill = "Java"
                    if (skill === "AWS") skill = "Amazon Web Services"
                    newArray.push(skill)
                })
            });
        });

        let counts: any = {} // This function counts all occurences of each keyword
        newArray.forEach(function (x) { counts[x.toString()] = (counts[x.toString()] || 0) + 1; })

        // Re-formats keyword object
        let countsArray: SkillCount[] = []
        for (const property in counts) {
            countsArray.push({ skillName: property, count: counts[property] })
        }
        countsArray.sort((a, b) => b.count - a.count);

        let topFive = []
        for (let i = 0; i < 5; i++) {
            countsArray[i] && topFive.push(countsArray[i].skillName)
        }
        console.log(countsArray)


        setTopFiveSkills(topFive)
        setSkillCounts(countsArray)
    }, [jobTitleSkillGroups])

    return (
        <Wrapper>
            <Title>{jobTitle}</Title>
            <div>
                <TopSkillTitle>Top 5 skills</TopSkillTitle>
                <TopSkillWrapper>
                    {
                        topFiveSkills.map(skillName => {
                            const index = topFiveSkills.indexOf(skillName) + 1
                            return (

                                <TopSkillWrapper key={index}>
                                    <TopSkillNumber>{index}</TopSkillNumber>
                                    <TopSkillText>{skillName}</TopSkillText>
                                </TopSkillWrapper>
                            )
                        })
                    }
                </TopSkillWrapper>
            </div>
            <div>
                {
                    skillCounts.map(skill => {
                        return (
                            <SkillWrapper key={skillCounts.indexOf(skill)}>
                                <h5>{Math.round(skill.count / numberOfListings * 100)}% of {jobTitle.toLowerCase()} positions require {skill.skillName}
                                </h5>
                            </SkillWrapper>
                        )
                    })

                }
            </div>
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
    border-bottom: 3px solid black;
    margin: 10px;
    text-align: center;
`

const TopSkillTitle = styled.h2`
    text-align: center;
    font-size: 30px;
`

const TopSkillWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`

const TopSkillNumber = styled.div`
    width: 60px;
    height: 60px;
    background-color: #34b800;
    font-weight: bold;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-left: 50px;
`

const TopSkillText = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-left: 5px;
`

const SkillWrapper = styled.div`
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
`

const SkillText = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
    display: inline-block;
`

const SumText = styled.p`
    display: inline-block;
`