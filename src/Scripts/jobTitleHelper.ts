
export function getJobTitleCategory(title: string) {
    if (title === "devops" || title === "DevOpsEngineer") return developers
    if (title === "frontend" || title === "FrontEndDeveloper") return developers
    if (title === "backend" || title === "BackEndDeveloper") return developers
    if (title === "fullstack" || title === "FullStackDeveloper") return developers
    if (title === "scientist" || title === "DataScientist") return otherJobTitles
    if (title === "analyst" || title === "DataAnalyst") return otherJobTitles
    if (title === "machine" || title === "MachineLearningEngineer") return otherJobTitles
    if (title === "architect" || title === "CloudArchitect") return otherJobTitles
    return [""]
}

export interface SkillCount {
    skillName: String;
    count: number;
}


// Counts all skills of the same kind and returns an object of sum of each skill
export function countSingleSkills(skills: String[]) {
    let counts: any = {} // This function counts all occurences of each keyword
    skills.forEach(function (x) { counts[x.toString()] = (counts[x.toString()] || 0) + 1; })

    // Re-formats keyword object
    let countsArray: SkillCount[] = []
    for (const property in counts) {
        countsArray.push({ skillName: property, count: counts[property] })
    }
    countsArray.sort((a, b) => b.count - a.count);

    return countsArray
}

export function separateUppercases(title: string) {
    let separatedTitle = title.replace(/([A-Z])/g, ' $1').trim()
    if (separatedTitle === "Dev Ops Engineer") separatedTitle = separatedTitle.replace("v O", "vO")

    return separatedTitle
}

export const jobTitles: string[] = [
    "DevOpsEngineer",
    "FrontEndDeveloper",
    "BackEndDeveloper",
    "FullStackDeveloper",
    "DataScientist",
    "DataAnalyst",
    "MachineLearningEngineer",
    "CloudArchitect"
]

export const developers: string[] = [
    "DevOpsEngineer",
    "FrontEndDeveloper",
    "BackEndDeveloper",
    "FullStackDeveloper"
]

export const otherJobTitles: string[] = [
    "DataScientist",
    "DataAnalyst",
    "MachineLearningEngineer",
    "CloudArchitect"
]