import { Skill } from "../App"

const emptySkill: Skill = { skillName: "", searchResultSum: "" }

export function divideToTens(skills: Skill[]) {

    let counter: number = 0
    let tenSkills: [Skill] = [emptySkill]
    let tenSkillsArray: [[Skill]] = [[emptySkill]]
    tenSkillsArray.splice(0, 1) // Removes empty placeholder skill


    skills.forEach(skill => {
        const index = parseInt(counter.toString()[0])
        tenSkills[index] = skill
        counter += 1

        if (counter === 10 || skill === skills[skills.length - 1]) {
            tenSkillsArray.push(tenSkills)
            counter = 0
            tenSkills = [emptySkill]
        }
    })

    return tenSkillsArray
}