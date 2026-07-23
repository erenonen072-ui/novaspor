async function loadHomeData() {

    const standingsBox = document.getElementById("homeStandings");
    const fixturesBox = document.getElementById("homeFixtures");


    if (!standingsBox || !fixturesBox) return;



    // PUAN DURUMU

    try {

        const standingsResponse = await fetch("/api/standings");

        const standingsData = await standingsResponse.json();


        if (standingsData.response && standingsData.response.length > 0) {


            let html = "";


            standingsData.response[0].league.standings[0]
            .slice(0,5)
            .forEach((team,index)=>{


                html += `

                <div class="team-row">

                ${index+1}. 
                ${team.team.name}

                <b>${team.points} P</b>

                </div>

                `;


            });


            standingsBox.innerHTML = html;


        } else {

            standingsBox.innerHTML =
            "🏆 Puan durumu bulunamadı.";

        }


    } catch(error){

        standingsBox.innerHTML =
        "❌ Puan durumu yüklenemedi.";

    }







    // FİKSTÜR


    try {


        const fixturesResponse =
        await fetch("/api/fixtures");


        const fixturesData =
        await fixturesResponse.json();



        if(fixturesData.response &&
        fixturesData.response.length > 0){


            let html="";



            fixturesData.response
            .slice(0,3)
            .forEach(match=>{


                html += `

                <div class="match">

                ⚽ ${match.teams.home.name}

                -

                ${match.teams.away.name}

                <br>

                📅 ${new Date(match.fixture.date)
                .toLocaleDateString("tr-TR")}

                </div>

                `;


            });



            fixturesBox.innerHTML = html;


        }else{


            fixturesBox.innerHTML =
            "📅 Maç bulunamadı.";


        }



    }catch(error){


        fixturesBox.innerHTML =
        "❌ Fikstür yüklenemedi.";


    }


}



loadHomeData();
