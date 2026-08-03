export interface GitHubUser {
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
}

const joka: string = 'bakaout'

export async function loadUser(): Promise<GitHubUser> {
    const response = await fetch(`https://api.github.com/users/${joka}`)

    //pequena validação
    if(!response){
        throw new Error('Erro ao buscar perfil')
    }

    //type assertion
    const data = await response.json() as GitHubUser

    return data
}
