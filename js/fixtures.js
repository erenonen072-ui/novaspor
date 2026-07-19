async function loadFixtures(){

    const box = document.getElementById("fixtures");

    if(!box) return;


    try{

        const response = await fetch("/api/fixtures");

        const data = await response.json();


        box.innerHTML="";


        data.response.forEach(match=>{


            box.innerHTML += `

            <div class="match">

            <h3>
            ${match.teams.home.name}
            -
            ${match.teams.away.name}
            </h3>

            <p>
            📅 ${new Date(match.fixture.date).toLocaleString("tr-TR")}
            </p>

            </div>

            `;


        });


    }catch(error){

        box.innerHTML="Fikstür yüklenemedi.";

        console.log(error);

    }

}


loadFixtures();
