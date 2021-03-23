


export const jobTitles: String[] = [
    "DevOpsEngineer",
    "FrontEndDeveloper",
    "BackEndDeveloper",
    "FullStackDeveloper",
    "DataScientist"
]

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