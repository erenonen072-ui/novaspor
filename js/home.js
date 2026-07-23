// ======================
// NOVASPOR HOME JS FIX
// ======================


// ⭐ FAVORİ TAKIM

const favButton = document.getElementById("favoriteBtn");

const favName = document.getElementById("favoriteName");


if(favButton){


favButton.onclick = function(){


let team = prompt(
"Favori takımını yaz:"
);



if(team){


favName.innerHTML = team;


localStorage.setItem(
"favoriteTeam",
team
);


}


};


}



let oldTeam =
localStorage.getItem("favoriteTeam");


if(oldTeam && favName){

favName.innerHTML = oldTeam;

}




// 🔴 CANLI MAÇ

const live =
document.getElementById("liveMatches");


if(live){

live.innerHTML = `

<div class="match">

⚽ Galatasaray 2 - 1 Fenerbahçe

</div>

`;

}




// 📅 FİKSTÜR

const fixtures =
document.getElementById("fixtures");


if(fixtures){

fixtures.innerHTML = `

<p>Galatasaray - Trabzonspor</p>

<p>Fenerbahçe - Beşiktaş</p>

`;

}
