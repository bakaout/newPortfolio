const joka = 'bakaout';
export async function loadUser() {
    const response = await fetch(`https://api.github.com/users/${joka}`);
    //pequena validação
    if (!response) {
        throw new Error('Erro ao buscar perfil');
    }
    //type assertion
    const data = await response.json();
    return data;
}
export async function loadRepos() {
    const response1 = await fetch(`https://api.github.com/users/${joka}/repos`);
    const data = await response1.json();
    return data;
}
// interface Language_url {
//     languages_url?: string | null;
// }
// export async function LoadLanguages(url: string){
//     const response = await fetch(url)
//     return await response.json()
// }
//# sourceMappingURL=github.js.map