function saveFavorite(){


let team = document.getElementById("teamSelect").value;


localStorage.setItem(
"favoriteTeam",
team
);


showFavorite();


}



function showFavorite(){


let team = localStorage.getItem("favoriteTeam");


let box = document.getElementById("favoriteTeam");



if(team && box){


box.innerHTML =
"⭐ Favori takımın: " + team;


}


}



showFavorite();
function showHomeFavorite(){

let team = localStorage.getItem("favoriteTeam");

let box = document.getElementById("homeFavorite");


if(box){

    if(team){

        box.innerHTML =
        "⭐ Favori takımın: " + team;

    }else{

        box.innerHTML =
        "Henüz favori takım seçmedin.";

    }

}

}


showHomeFavorite();
