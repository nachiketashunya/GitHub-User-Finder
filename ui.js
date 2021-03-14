class UI {
    constructor() {
        this.profile = document.querySelector("#profile");
        this.latest_repos = document.querySelector("#latest-repos")
    }

    showUser(user) {
        console.log(user);
        this.clearAlert();
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" class="img-fluid">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3 mt-3">View Profile </a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos : ${user.public_repos} </span>
                        <span class="badge badge-success">Public Gists : ${user.public_gists} </span>
                        <span class="badge badge-dark">Followers : ${user.followers} </span>
                        <span class="badge badge-info">Following : ${user.following} </span>

                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item"><b> Name : </b> ${user.name} </li>
                            <li class="list-group-item"><b> Company :</b> ${user.company} </li>
                            <li class="list-group-item"><b> Website/blog : </b><a href="${user.blog}" target="_blank"> ${user.blog} </a> </li>
                            <li class="list-group-item"><b> Location : </b> ${user.location} </li>
                            <li class="list-group-item"><b> Member since : </b> ${new Date(user.created_at).getFullYear()} </li>
                        </ul>
                    </div> 
                </div>
            </div>`

    };

    showRepos(repos) {
        let output = "<h3> Latest Repos </h3>";

        repos.forEach( (repo) => {
            output += `
                <div class="card card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name} </a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary"> Stars : ${repo.stargazers_count} </span>
                            <span class="badge badge-secondary"> Watchers : ${repo.watchers_count} </span>
                            <span class="badge badge-info"> Forks : ${repo.forks} </span>
                        </div>
                    </div>
                </div>` 
        })

        this.latest_repos.innerHTML = output;
    };

    showAlert(message, className) {
        this.clearAlert();
        this.clearProfile();

        const alertContainer = document.querySelector("#alert-container");

        let alertDiv = document.createElement("div");
        let alertText = document.createTextNode(`${message}`);

        alertDiv.appendChild(alertText);
        alertDiv.className = className;
        
        alertContainer.insertAdjacentElement("afterbegin", alertDiv);
    };

    clearAlert() {
        const getAlertElem = document.querySelector('#alert-container');

        if(getAlertElem){
            getAlertElem.innerHTML = "";
        }
    };

    clearProfile() {
        const userProfile = document.getElementById("profile");
        const userRepos = document.getElementById("latest-repos");

        userProfile.innerHTML = "";
        userRepos.innerHTML = "";
    }
}