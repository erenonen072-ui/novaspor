const teams = {

    "Galatasaray": "https://media.api-sports.io/football/teams/645.png",

    "Fenerbahçe": "https://media.api-sports.io/football/teams/611.png",

    "Beşiktaş": "https://media.api-sports.io/football/teams/549.png",

    "Trabzonspor": "https://media.api-sports.io/football/teams/998.png",

    "Başakşehir": "https://media.api-sports.io/football/teams/563.png"

};





function saveFavorite(){


let team = document.getElementById("teamSelect").value;


localStorage.setItem(
"favoriteTeam",
team
);


showFavorite();

showHomeFavorite();


}






function showFavorite(){


let team = localStorage.getItem("favoriteTeam");

let box = document.getElementById("favoriteTeam");



if(team && box){


box.innerHTML = `

<img class="team-logo" src="${teams[team]}">

<br>

⭐ Favori takımın: ${team}

`;

}


}






function showHomeFavorite(){


let team = localStorage.getItem("favoriteTeam");

let box = document.getElementById("homeFavorite");



if(box){


if(team){


box.innerHTML = `

<img class="team-logo-small" src="${teams[team]}">

<br>

⭐ ${team}

`;



}else{


box.innerHTML =
"Henüz favori takım seçilmedi.";


}


}


}





showFavorite();

showHomeFavorite();
