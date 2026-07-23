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





// 🏆 PUAN DURUMU

const standingsBox =
document.getElementById("standings");


async function loadHomeStandings(){


if(!standingsBox) return;


try{


const response =
await fetch("/api/standings");


const data =
await response.json();



if(
!data.response ||
!data.response[0] ||
!data.response[0].league
){

standingsBox.innerHTML =
"⚠️ Puan durumu bulunamadı";

return;

}



const table =
data.response[0].league.standings[0];



standingsBox.innerHTML = "";



table.slice(0,5).forEach(team=>{


standingsBox.innerHTML += `

<div class="standing-row">

<span>
${team.rank}. ${team.team.name}
</span>


<b>
${team.points} P
</b>

</div>

`;



});


}

catch(error){


standingsBox.innerHTML =
"⚠️ Puan durumu yüklenemedi";


console.log(error);


}


}



loadHomeStandings();
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
// 🍪 ÇEREZ


const cookieBox =
document.getElementById("cookieBox");


const cookieAccept =
document.getElementById("cookieAccept");


const cookieClose =
document.getElementById("cookieClose");



if(localStorage.getItem("cookieOK")){

if(cookieBox)
cookieBox.style.display="none";

}




if(cookieAccept){

cookieAccept.onclick=()=>{

localStorage.setItem(
"cookieOK",
"true"
);


cookieBox.style.display="none";

};

}



if(cookieClose){

cookieClose.onclick=()=>{


cookieBox.style.display="none";


};

}
// 🔍 ARAMA SİSTEMİ


const searchInput =
document.getElementById("searchInput");



if(searchInput){


searchInput.addEventListener(
"input",
()=>{


let value =
searchInput.value.toLowerCase();



const items =
document.querySelectorAll(
".box, .news-item"
);



items.forEach(item=>{


let text =
item.innerText.toLowerCase();



if(text.includes(value)){


item.style.display="block";


}

else{


item.style.display="none";


}


});


});


}
// 📱 MOBİL MENÜ

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");


if(menuBtn && mobileMenu){

    menuBtn.addEventListener("click", function(){

        mobileMenu.classList.toggle("active");

    });

}
