// ======================
// NOVASPOR HOME JS
// ======================


// ⭐ FAVORİ TAKIM

const favButton = document.querySelector(".box button");

const favName = document.getElementById("favoriteName");

const favLogo = document.getElementById("favoriteLogo");



if(favButton){


favButton.addEventListener("click",()=>{


let team = prompt(
"Favori takımını yaz:"
);



if(team){


favName.innerText = team;


localStorage.setItem(
"favoriteTeam",
team
);


}


});


}




let saved =
localStorage.getItem("favoriteTeam");


if(saved && favName){

favName.innerText = saved;

}





// 🔴 CANLI MAÇ ÖRNEK

const live =
document.getElementById("liveMatches");


if(live){


live.innerHTML = `

<div>

⚽ Galatasaray 2 - 1 Fenerbahçe

</div>

`;

}





// 📅 FİKSTÜR ÖRNEK

const fixtures =
document.getElementById("fixtures");


if(fixtures){


fixtures.innerHTML = `

<div>

📅 Galatasaray - Trabzonspor

</div>


<div>

📅 Fenerbahçe - Beşiktaş

</div>

`;

}






// 🌙 KARANLIK MOD EKLEME


const darkButton =
document.createElement("button");


darkButton.innerHTML="🌙";


darkButton.style.position="fixed";

darkButton.style.right="20px";

darkButton.style.bottom="20px";

darkButton.style.zIndex="999";



document.body.appendChild(
darkButton
);




darkButton.onclick=()=>{


document.body.classList.toggle(
"dark"
);


};
