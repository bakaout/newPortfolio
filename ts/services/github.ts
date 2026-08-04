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

export interface Repositorio {
    id: number,
    name: string;
    description: string | null;
    languages_url?: string | null;
    html_url?: string;
    homepage?: string | null;//link projeo publicado
    pushed_at: string;
}

export async function loadRepos(): Promise<Repositorio[]>{
    const response1 = await fetch(`https://api.github.com/users/${joka}/repos`)

    const data = await response1.json()

    return data
}

//PROXIMA FEATURE: INCREMENTAR LINGUAGENS QUE FORAM USADAS NOS REPOSITORIOS
//https://api.github.com/repos/bakaout/CRUDmovies/languages


export interface Language_url {
    languages_url?: string | null;
}

export async function LoadLanguages(url: any): Promise<Language_url>{
    const response = await fetch(url)

    if(!response.ok){
        throw new Error(`Erro na API: ${response.status}`)
    }

    return await response.json()
}