function saveFavorite(){

    const team =
    document.getElementById("teamSelect").value;


    localStorage.setItem(
        "favoriteTeam",
        team
    );


    showFavorite();

}



function showFavorite(){

    const team =
    localStorage.getItem("favoriteTeam");


    if(team){

        document.getElementById("favoriteText").innerHTML =
        "⭐ Favori takımın: " + team;

    }

}


showFavorite();
<script src="js/favorites.js"></script>

</body>

</html>
