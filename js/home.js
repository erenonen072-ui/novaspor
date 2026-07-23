// =========================
// NOVASPOR V3 HOME.JS
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




// kayıtlı tema

if(localStorage.getItem("darkMode") === "true"){

    document.body.classList.add("dark");

}





// 🍪 ÇEREZ SİSTEMİ


const cookieBox =
document.getElementById("cookieBox");


const cookieAccept =
document.getElementById("cookieAccept");



if(localStorage.getItem("cookiesAccepted")){


    if(cookieBox){

        cookieBox.style.display="none";

    }


}




if(cookieAccept){


cookieAccept.addEventListener("click",()=>{


    localStorage.setItem(
        "cookiesAccepted",
        "true"
    );


    cookieBox.style.display="none";


});


}






// 🔍 ARAMA


const search =
document.getElementById("search");



if(search){


search.addEventListener("input",()=>{


let value =
search.value.toLowerCase();



document.querySelectorAll(
".card,.news-card"
)
.forEach(card=>{


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



const favoriteButton =
document.querySelector(
".favorite-box button"
);



const favoriteName =
document.getElementById(
"favoriteName"
);



const favoriteLogo =
document.getElementById(
"favoriteLogo"
);




if(favoriteButton){


favoriteButton.addEventListener(
"click",
()=>{


let team =
prompt(
"Favori takımını yaz:"
);



if(team){


favoriteName.innerText =
team;



localStorage.setItem(
"favoriteTeam",
team
);



}



});


}




let savedTeam =
localStorage.getItem(
"favoriteTeam"
);



if(savedTeam && favoriteName){


favoriteName.innerText =
savedTeam;


}






// 🔴 ÖRNEK CANLI MAÇ


const live =
document.getElementById(
"liveMatches"
);



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







// 📅 YAKLAŞAN MAÇ


const upcoming =
document.getElementById(
"upcomingMatches"
);



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
