import BACKEND_PATH from '../../backend-environment'

export class TeamMember {
    constructor(
        public name: string,
        public position: {
            se: string
            en: string
        },
        public priority: number,
        public imagePath: string,
        public email: string,
        public linkedInURL: string,
        public personId: string,
    ) {}

    public static memberFromJSON(json: any): TeamMember {
        const img = json.image !== '' ? json.image : 'placeholder.png'
        return new TeamMember(
            json.name,
            { //position
                se: json.desc_se,
                en: json.desc_en,
            },
            json.priority,
            '/assets/team/' + img,
            json.email,
            json.linkedin,
            json.personId
        )
    }
}

async function parseMembersJson(response: Response): Promise<TeamMember[]> {
    const teamMembersJson = await response.json()
    let teamMembers: TeamMember[] = []
    teamMembersJson.forEach((json: any) => {
        teamMembers.push(TeamMember.memberFromJSON(json))
    })
    return teamMembers
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
    const response = await fetch(BACKEND_PATH + 'getTeam.php')
    return parseMembersJson(response)
}

export async function getSalesTeamMemebers(): Promise<TeamMember[]> {
    const response = await fetch(
        BACKEND_PATH + 'getTeam.php?action=company-responsible'
    )
    return parseMembersJson(response)
}

export async function getProjectLeaders(): Promise<TeamMember[]> {
    const response = await fetch(
        BACKEND_PATH + 'getTeam.php?action=project-leaders'
    )
    return parseMembersJson(response)
}

export async function getEventTeamMembers(): Promise<TeamMember[]> {
    const response = await fetch(
        BACKEND_PATH + 'getTeam.php?action=event-responsible'
    )
    return parseMembersJson(response)
}

export async function getMarketingTeamMembers(): Promise<TeamMember[]> {
    const response = await fetch(
        BACKEND_PATH + 'getTeam.php?action=marketing-responsible'
    )
    return parseMembersJson(response)
}