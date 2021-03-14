class GitHub {
    constructor() {
        this.client_id = "08f8a881cdb58a7e609f";
        this.client_secret = "89a726e47b899cb6b39da2923dfd64ef717a5aef";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const userResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await userResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}