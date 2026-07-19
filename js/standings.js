async function loadStandings(){

    const box = document.getElementById("standings");

    try {

        const response = await fetch("/api/standings");
        const data = await response.json();

        console.log(data);


        if(!data.response || data.response.length === 0){

            box.innerHTML = "Puan durumu bulunamadı.";
            return;

        }


        const teams = data.response[0].league.standings[0];


        box.innerHTML = "";


        teams.forEach(team => {

            box.innerHTML += `

            <div class="match">

                <strong>
                ${team.rank}. ${team.team.name}
                </strong>

                <span>
                ${team.points} Puan
                </span>

            </div>

            `;

        });


    } catch(error){

        console.error(error);

        box.innerHTML =
        "Puan durumu yüklenemedi.";

    }

}


loadStandings();
