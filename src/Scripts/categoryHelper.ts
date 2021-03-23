import { Skill } from "../App";

export const extractCategoryToday = (skillsToday: Skill[], category: String[]) => {
    let categorySkills: Skill[] = []

    skillsToday.forEach(skill => {
        category.forEach(categorySkillName => {
            if (skill.skillName === categorySkillName) {
                categorySkills.push(skill)
            }
        })
    })

    return categorySkills
}