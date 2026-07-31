export async function loadUser() {
    const response = await fetch("https://api.github.com/users/bakaout");
    //pequena validação
    if (!response) {
        throw new Error('Erro ao buscar perfil');
    }
    //type assertion
    const data = await response.json();
    return data;
}
//# sourceMappingURL=github.js.map