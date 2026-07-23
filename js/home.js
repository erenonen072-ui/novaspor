// =========================
// NOVASPOR V2 HOME.JS
// =========================


// 🌙 KARANLIK MOD

const darkBtn = document.getElementById("darkMode");


if(darkBtn){

    darkBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");


        localStorage.setItem(
            "darkMode",
            document.body.classList.contains("dark")
        );

    });

}



// kayıtlı karanlık mod

if(localStorage.getItem("darkMode") === "true"){

    document.body.classList.add("dark");

}




// 🍪 ÇEREZ

const cookieBox = document.getElementById("cookieBox");
const cookieBtn = document.getElementById("cookieAccept");


if(localStorage.getItem("cookieOK")){

    if(cookieBox)
        cookieBox.style.display="none";

}



if(cookieBtn){

cookieBtn.addEventListener("click",()=>{


    localStorage.setItem(
        "cookieOK",
        "true"
    );


    cookieBox.style.display="none";


});


}





// 🔍 ARAMA

const searchInput = document.getElementById("search");


if(searchInput){

searchInput.addEventListener("keyup",(e)=>{


    const value =
    e.target.value.toLowerCase();


    const cards =
    document.querySelectorAll(
        ".card,.news-card"
    );


    cards.forEach(card=>{


        if(
            card.innerText
            .toLowerCase()
            .includes(value)
        ){

            card.style.display="";

        }

        else{

            card.style.display="none";

        }


    });


});


}





// ⭐ FAVORİ TAKIM

const favoriteBtn =
document.querySelector(".favorite-box button");


const favoriteName =
document.getElementById("favoriteName");


const favoriteLogo =
document.getElementById("favoriteLogo");



if(favoriteBtn){


favoriteBtn.addEventListener("click",()=>{


let team =
prompt(
"Favori takımını yaz:"
);



if(team){


favoriteName.innerText = team;


favoriteLogo.src =
"https://media.api-sports.io/football/teams/645.png";



localStorage.setItem(
"favoriteTeam",
team
);


}



});


}




// kayıtlı takım

const savedTeam =
localStorage.getItem("favoriteTeam");


if(savedTeam && favoriteName){

favoriteName.innerText =
savedTeam;

}



// =========================
// ÖRNEK VERİLER
// =========================



const live =
document.getElementById("liveMatches");


if(live){


live.innerHTML = `

<div class="match-card">

<div class="team">
⚽ Galatasaray
</div>

<div class="score">
2 - 1
</div>

<div class="team">
Fenerbahçe ⚽
</div>

</div>

`;


}




const upcoming =
document.getElementById("upcomingMatches");


if(upcoming){


upcoming.innerHTML = `

<div class="match-card">

<div>
Galatasaray
</div>

<div>
20:00
</div>

<div>
Trabzonspor
</div>

</div>

`;

}
