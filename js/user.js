function loadUser() {
    let username = localStorage.getItem("username");

    if (!username) {
        username = prompt("Adın nedir?");
        if (username && username.trim() !== "") {
            localStorage.setItem("username", username);
        } else {
            username = "Misafir";
        }
    }

    const welcome = document.getElementById("welcome");

    if (welcome) {
        welcome.innerHTML = "👋 Hoş geldin, " + username + "!";
    }
}

loadUser();
