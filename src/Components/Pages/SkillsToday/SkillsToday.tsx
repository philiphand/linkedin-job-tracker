import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Skill } from "../../../App";
import { NavButton } from "../../Shared/NavButton";
import { PageNumberDisplay } from "../../Shared/PageNumberDisplay";
import { NavButtonsWrapper, Transparent } from "../../Shared/shared.style";

interface Props {
    skillsToday: [Skill];
    title: String;
}

const emptySkill: Skill = { skillName: "", searchResultSum: "" }

export const SkillsToday: React.FC<Props> = ({ skillsToday, title }) => {
    const [numberOfPages, setNumberOfPages] = useState<number>(0)
    const [pageNumber, setPageNumber] = useState<number>(0)
    const [tensOfSkills, setTensOfSkills] = useState<[[Skill]]>([[emptySkill]])


    useEffect(() => {
        // Fixes crash when refreshing browser window
        if (skillsToday.length > 0) {
            setNumberOfPages(skillsToday.length % 10 === 0 ? skillsToday.length / 10 : Math.floor(skillsToday.length / 10) + 1)

            let counter: number = 0
            let tenSkills: [Skill] = [emptySkill]
            let tenSkillsArray: [[Skill]] = [[emptySkill]]
            tenSkillsArray.splice(0, 1) // Remove empty placeholder skill
            skillsToday.forEach(skill => {
                const index = parseInt(counter.toString()[0])
                tenSkills[index] = skill
                counter += 1
                if (counter === 10 || skill === skillsToday[skillsToday.length - 1]) {

                    tenSkillsArray.push(tenSkills)
                    counter = 0
                    tenSkills = [emptySkill]
                }
            })
            console.log(tensOfSkills[0].length + numberOfPages)
            if (tensOfSkills.length !== numberOfPages) setTensOfSkills(tenSkillsArray)
            console.log(tensOfSkills)
        }
    }, [numberOfPages, skillsToday, tensOfSkills])

    return (
        <Wrapper>
            <Transparent>
                <Title>{title}</Title>
                {
                    // If placeholder value, don't render anything
                    tensOfSkills[pageNumber][0].skillName !== "" && tensOfSkills[pageNumber].map(skill => {
                        return (
                            <SkillWrapper key={skillsToday.indexOf(skill)}>
                                <SkillText>{skillsToday.indexOf(skill) + 1}. {skill.skillName}</SkillText>
                                <SumText>{`${skill.searchResultSum} job listings`}</SumText>
                            </SkillWrapper>
                        )
                    })
                }
                {numberOfPages > 1 &&
                    <NavButtonsWrapper>
                        <NavButton direction="Prev" onClick={() => pageNumber > 0 && setPageNumber(pageNumber - 1)} />
                        <PageNumberDisplay pageNumber={pageNumber + 1} numberOfPages={numberOfPages} />
                        <NavButton direction="Next" onClick={() => pageNumber < numberOfPages - 1 && setPageNumber(pageNumber + 1)} />
                    </NavButtonsWrapper>
                }
            </Transparent>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10px;
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
`

const SkillText = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
    color: white;
    width: 300px;
`

const SumText = styled.p`
    display: inline-block;
    color: white;
`