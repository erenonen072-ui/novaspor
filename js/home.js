async function loadHomeData() {

    const standingsBox = document.getElementById("homeStandings");
    const fixturesBox = document.getElementById("homeFixtures");


    if (!standingsBox || !fixturesBox) return;



    // 🏆 PUAN DURUMU

    try {

        const response = await fetch("/api/standings");

        const data = await response.json();



        if (
            data.response &&
            data.response.length > 0
        ) {


            let html = "";

            const teams =
            data.response[0]
            .league
            .standings[0]
            .slice(0,5);



            teams.forEach((team,index)=>{


                html += `

                <div class="team-row">

                <span>
                ${index + 1}. ${team.team.name}
                </span>


                <b>
                ${team.points} P
                </b>

                </div>

                `;


            });


            standingsBox.innerHTML = html;


        } else {


            standingsBox.innerHTML =
            "🏆 Puan durumu bulunamadı.";


        }



    } catch(error) {


        console.log(error);


        standingsBox.innerHTML =
        "❌ Puan durumu yüklenemedi.";


    }









    // 📅 YAKLAŞAN MAÇLAR

    try {


        const response =
        await fetch("/api/fixtures");


        const data =
        await response.json();



        if (
            data.response &&
            data.response.length > 0
        ){


            let html = "";



            const upcoming =
            data.response
            .filter(match => {

                return new Date(match.fixture.date)
                >= new Date();

            })
            .slice(0,3);



            if(upcoming.length === 0){


                fixturesBox.innerHTML =
                "📅 Yaklaşan maç bulunamadı.";

                return;


            }




            upcoming.forEach(match=>{


                const date =
                new Date(match.fixture.date)
                .toLocaleDateString("tr-TR");



                html += `

                <div class="match">

                <strong>

                ${match.teams.home.name}

                -
                
                ${match.teams.away.name}

                </strong>


                <br>


                📅 ${date}


                </div>

                `;


            });



            fixturesBox.innerHTML = html;


        }
        else{


            fixturesBox.innerHTML =
            "📅 Fikstür bulunamadı.";


        }



    } catch(error){


        console.log(error);


        fixturesBox.innerHTML =
        "❌ Fikstür yüklenemedi.";


    }



}



loadHomeData();
