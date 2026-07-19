async function loadStandings(){

    const box = document.getElementById("standings");

    try{

        const response = await fetch("/api/standings");
        const data = await response.json();


        const teams = data.response[0].league.standings[0];


        box.innerHTML = `

        <div class="table">

        <div class="row header">
        <span>Sıra</span>
        <span>Takım</span>
        <span>Puan</span>
        </div>

        </div>

        `;


        teams.forEach(team => {

            box.innerHTML += `

            <div class="row">

                <span>${team.rank}</span>


                <span class="team">

                <img src="${team.team.logo}">
                
                ${team.team.name}

                </span>


                <strong>
                ${team.points}
                </strong>

            </div>

            `;

        });


    }catch(error){

        console.log(error);

        box.innerHTML =
        "Puan durumu yüklenemedi.";

    }

}


loadStandings();
