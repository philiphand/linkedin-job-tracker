import { Skill } from "../App";
import { languages, frameworks, software, other } from "./categories"

export const filterCategory = (allSkills: Skill[], categoryName: string) => {
    let categorySkills: Skill[] = []

    let categorySkillNames: string[] = []
    if (categoryName === "languages") categorySkillNames = languages
    if (categoryName === "frameworks") categorySkillNames = frameworks
    if (categoryName === "software") categorySkillNames = software
    if (categoryName === "other") categorySkillNames = other


    allSkills.forEach(skill => {
        categorySkillNames.forEach(categorySkillName => {
            if (skill.skillName === categorySkillName) {
                categorySkills.push(skill)
            }
        })
    })

    return categorySkills
}

export function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}