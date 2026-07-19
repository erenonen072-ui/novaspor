async function loadMatches(){

    const box = document.getElementById("matches");

    try{

        const response = await fetch("/api/matches");

        const data = await response.json();


        if(!data.response || data.response.length === 0){

            box.innerHTML = `
            <div class="match">
            Şu anda canlı maç bulunmuyor.
            </div>
            `;

            return;
        }


        box.innerHTML = "";


        data.response.forEach(match => {


            const home = match.teams.home;
            const away = match.teams.away;

            const homeScore = match.goals.home ?? 0;
            const awayScore = match.goals.away ?? 0;

            const minute = match.fixture.status.elapsed ?? "-";

            const league = match.league.name;



            box.innerHTML += `

            <div class="match">


            <p>🏆 ${league}</p>


            <p class="minute">
            🔴 CANLI ${minute}'
            </p>


            <div class="teams">


            <div>
            <img src="${home.logo}">
            <br>
            ${home.name}
            </div>


            <div class="score">

            ${homeScore} - ${awayScore}

            </div>


            <div>

            <img src="${away.logo}">
            <br>
            ${away.name}

            </div>


            </div>


            </div>

            `;


        });


    }
    catch(error){

        box.innerHTML = `
        <div class="match">
        Canlı maçlar yüklenemedi.
        </div>
        `;

        console.error(error);

    }

}


loadMatches();


// Her 60 saniyede yenile
setInterval(loadMatches,60000);
