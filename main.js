const searchInput = document.getElementById("search-user");

const github = new GitHub;
const ui = new UI;  

searchInput.addEventListener("keyup", searchUser);

function searchUser(e) {
    const userText = e.target.value;

    if(userText != "") {
        github.getUser(userText)
            .then( (user) => {
                if(user.profile.message == "Not Found") {
                    ui.showAlert("User Not Found", "alert alert-danger")  
                } else {
                    ui.showUser(user.profile);
                    ui.showRepos(user.repos);
                }
            })
    
    } else {
        ui.clearProfile();
    }

}