export default
    class GithubApi {
    constructor(serverGitUrl) {
        this.serverGitUrl = serverGitUrl;
        this.getCardsCommits()
    }

    getCardsCommits() {
        return fetch(`${this.serverGitUrl}`, {
            method: "GET",
        })
            .then(res => {
        
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
    }
}