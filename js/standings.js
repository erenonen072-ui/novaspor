async function loadStandings(){

    const box = document.getElementById("standings");

    if(!box) return;

    try{

        const response = await fetch("/api/standings");

        const data = await response.json();


        const table = data.response[0].league.standings[0];


        box.innerHTML = "";


        table.forEach(team => {


            box.innerHTML += `

            <div class="standing">

                <span>
                ${team.rank}. ${team.team.name}
                </span>

                <strong>
                ${team.points} P
                </strong>

            </div>

            `;


        });


    }catch(error){

        box.innerHTML =
        "Puan durumu yüklenemedi.";

        console.error(error);

    }

}


loadStandings();
 
