import { Skill } from "../App"

export function checkIfJobTitle(title: string) {
    if (title === "devops" || title === "DevOpsEngineer") return "devops"
    if (title === "frontend" || title === "FrontEndDeveloper") return "frontend"
    if (title === "backend" || title === "BackEndDeveloper") return "backend"
    if (title === "fullstack" || title === "FullStackDeveloper") return "fullstack"
    if (title === "scientist" || title === "DataScientist") return "scientist"
    return ""
}

export interface SkillCount {
    skillName: String;
    count: number;
}

export function countSingleSkills(skills: String[]) {
    let counts: any = {} // This function counts all occurences of each keyword
    skills.forEach(function (x) { counts[x.toString()] = (counts[x.toString()] || 0) + 1; })

    // Re-formats keyword object
    let countsArray: SkillCount[] = []
    for (const property in counts) {
        countsArray.push({ skillName: property, count: counts[property] })
    }
    countsArray.sort((a, b) => b.count - a.count);

    // let topFive = []
    // for (let i = 0; i < 5; i++) {
    //     countsArray[i] && topFive.push(countsArray[i].skillName)
    // }

    return countsArray
}

export const jobTitles: string[] = [
    "DevOpsEngineer",
    "FrontEndDeveloper",
    "BackEndDeveloper",
    "FullStackDeveloper",
    "DataScientist"
]

export interface TitleObject {
    titles: {
        devops: "DevOpsEngineer",
        frontend: "FrontEndDeveloper",
        backend: "BackEndDeveloper",
        fullstack: "FullStackDeveloper",
        scientist: "DataScientist"
    }
}
export interface JobTitleSkillGroups {
    devops: [string[]];
    frontend: [string[]];
    backend: [string[]];
    fullstack: [string[]];
    scientist: [string[]];
}

export enum TitleShortHands {
    devops = "DevOpsEngineer",
    frontend = "FrontEndDeveloper",
    backend = "BackEndDeveloper",
    fullstack = "FullStackDeveloper",
    scientist = "DataScientist"
}

export const emptyJobTitleObject: JobTitleSkillGroups = {
    devops: [[]],
    frontend: [[]],
    backend: [[]],
    fullstack: [[]],
    scientist: [[]]
}