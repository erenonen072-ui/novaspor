// ======================
// NOVASPOR HOME JS
// ======================


// ⭐ FAVORİ TAKIM

const favButton = document.getElementById("favoriteBtn");

const favName = document.getElementById("favoriteName");

const favLogo = document.getElementById("favoriteLogo");



const logos = {

    "Galatasaray":
    "https://media.api-sports.io/football/teams/645.png",

    "Fenerbahçe":
    "https://media.api-sports.io/football/teams/611.png",

    "Beşiktaş":
    "https://media.api-sports.io/football/teams/549.png",

    "Trabzonspor":
    "https://media.api-sports.io/football/teams/998.png"

};





if(favButton){


favButton.addEventListener("click",()=>{


let team = prompt(
"Favori takımını yaz:"
);



if(team){


favName.innerHTML = team;



if(logos[team]){

favLogo.src = logos[team];

}




localStorage.setItem(
"favoriteTeam",
team
);



localStorage.setItem(
"favoriteLogo",
logos[team] || ""
);



}


});


}






// KAYITLI FAVORİ TAKIM

let savedTeam =
localStorage.getItem("favoriteTeam");


let savedLogo =
localStorage.getItem("favoriteLogo");



if(savedTeam && favName){

favName.innerHTML = savedTeam;

}



if(savedLogo && favLogo){

favLogo.src = savedLogo;

}







// 🔴 CANLI MAÇLAR


const live =
document.getElementById("liveMatches");



if(live){


live.innerHTML = `


<div class="match-card">


<div>

⚽ Galatasaray

</div>


<div>

2 - 1

</div>


<div>

Fenerbahçe ⚽

</div>



</div>


`;

}







// 📅 YAKLAŞAN MAÇLAR


const fixtures =
document.getElementById("fixtures");



if(fixtures){


fixtures.innerHTML = `


<div class="match-card">

📅 Galatasaray - Trabzonspor

</div>



<div class="match-card">

📅 Fenerbahçe - Beşiktaş

</div>



`;

}






// 🌙 KARANLIK MOD


const darkButton =
document.createElement("button");


darkButton.innerHTML="🌙";


darkButton.className="dark-btn";


document.body.appendChild(
darkButton
);



darkButton.addEventListener(
"click",
()=>{


document.body.classList.toggle(
"dark"
);


localStorage.setItem(
"dark",
document.body.classList.contains("dark")
);


}

);





if(localStorage.getItem("dark") === "true"){

document.body.classList.add("dark");

}
