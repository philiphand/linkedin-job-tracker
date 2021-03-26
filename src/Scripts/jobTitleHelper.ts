
export function checkIfJobTitle(title: string) {
    console.log(title)
    if (title === "devops" || "DevopsEngineer") return "devops"
    if (title === "frontend" || "FrontEndEngineer") return "frontend"
    if (title === "backend" || "BackEndEngineer") return "backend"
    if (title === "fullstack" || "FullStackEngineer") return "fullstack"
    if (title === "scientist" || "DataScientist") return "scientist"
    return ""
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