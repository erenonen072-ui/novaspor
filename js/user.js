function loadUser() {

    let username = localStorage.getItem("username");

    if (!username) {
        username = prompt("Adın nedir?");
        if (!username || username.trim() === "") {
            username = "Misafir";
        }
        localStorage.setItem("username", username);
    }

    const favorite = localStorage.getItem("favoriteTeam") || "Seçilmedi";

    document.getElementById("welcome").innerHTML =
        "👋 Hoş geldin, " + username + "!";

    document.getElementById("profileName").innerHTML =
        "👤 İsim: " + username;

    document.getElementById("profileTeam").innerHTML =
        "⭐ Favori Takım: " + favorite;
}

function editProfile() {

    const yeniAd = prompt("Yeni adını gir:");

    if (yeniAd && yeniAd.trim() !== "") {
        localStorage.setItem("username", yeniAd);
        loadUser();
    }

}

loadUser();
