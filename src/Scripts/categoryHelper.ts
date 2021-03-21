import { Skill } from "../App";

export const extractCategoryToday = (skillsToday: Skill[], category: String[]) => {
    let languageSearchResults: Skill[] = []

    skillsToday.forEach(skill => {
        category.forEach(lang => {
            if (skill.skillName === lang) {
                languageSearchResults.push(skill)
            }
        })
    })

    return languageSearchResults
}