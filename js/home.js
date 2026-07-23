// ======================
// NOVASPOR HOME JS
// ======================


// ⭐ FAVORİ TAKIM


const favoriteBtn =
document.getElementById("favoriteBtn");


const favoriteName =
document.getElementById("favoriteName");


const favoriteLogo =
document.getElementById("favoriteLogo");



const teams = {


"Galatasaray":
"https://media.api-sports.io/football/teams/645.png",


"Fenerbahçe":
"https://media.api-sports.io/football/teams/611.png",


"Beşiktaş":
"https://media.api-sports.io/football/teams/549.png",


"Trabzonspor":
"https://media.api-sports.io/football/teams/998.png"


};





if(favoriteBtn){


favoriteBtn.onclick = ()=>{


let team = prompt(
"Favori takımını yaz:"
);



if(teams[team]){


favoriteName.innerHTML = team;


favoriteLogo.src = teams[team];


localStorage.setItem(
"favoriteTeam",
team
);


localStorage.setItem(
"favoriteLogo",
teams[team]
);


}

else if(team){


alert(
"Takım bulunamadı. Galatasaray, Fenerbahçe, Beşiktaş veya Trabzonspor yaz."
);


}



};


}







// kayıtlı takım


let savedTeam =
localStorage.getItem("favoriteTeam");


let savedLogo =
localStorage.getItem("favoriteLogo");



if(savedTeam){

favoriteName.innerHTML =
savedTeam;

}



if(savedLogo){

favoriteLogo.src =
savedLogo;

}






// 🔴 CANLI MAÇ


const live =
document.getElementById("liveMatches");



if(live){


live.innerHTML = `

<div>

⚽ Galatasaray 2 - 1 Fenerbahçe

</div>

`;

}






// 📅 FİKSTÜR


const fixtures =
document.getElementById("fixtures");



if(fixtures){


fixtures.innerHTML = `

<p>
📅 Galatasaray - Trabzonspor
</p>

<p>
📅 Fenerbahçe - Beşiktaş
</p>

`;

}
// 🌙 KARANLIK MOD


const darkButton =
document.getElementById("darkMode");



if(darkButton){


darkButton.addEventListener("click",()=>{


document.body.classList.toggle("dark");


localStorage.setItem(
"darkMode",
document.body.classList.contains("dark")
);


});


}




// kayıtlı tema


if(localStorage.getItem("darkMode") === "true"){


document.body.classList.add("dark");


}
