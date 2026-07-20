async function loadFixtures() {

    const box = document.getElementById("fixtures");

    if (!box) return;


    box.innerHTML = "📅 Fikstür yükleniyor...";


    try {


        const response = await fetch("/api/fixtures");

        const data = await response.json();



        if (!data.response || data.response.length === 0) {

            box.innerHTML = "⚽ Fikstür bulunamadı.";

            return;

        }



        const upcomingMatches = data.response
            .filter(match => new Date(match.fixture.date) >= new Date())
            .slice(0,30);



        if (upcomingMatches.length === 0) {

            box.innerHTML = "⚽ Yaklaşan maç bulunamadı.";

            return;

        }



        box.innerHTML = "";



        upcomingMatches.forEach(match => {



            const home = match.teams.home;

            const away = match.teams.away;


            const date = new Date(match.fixture.date);



            box.innerHTML += `


            <div class="fixture-card">


                <div class="league">

                    ${match.league.name}

                </div>



                <div class="fixture-header">

                    📅 ${date.toLocaleDateString("tr-TR")}

                    -

                    ${date.toLocaleTimeString("tr-TR", {
                        hour:"2-digit",
                        minute:"2-digit"
                    })}

                </div>




                <div class="teams">


                    <div class="team">


                        <img src="${home.logo}" alt="${home.name}">


                        <div class="team-name">

                            ${home.name}

                        </div>


                    </div>




                    <div class="vs">

                        VS

                    </div>




                    <div class="team">


                        <img src="${away.logo}" alt="${away.name}">


                        <div class="team-name">

                            ${away.name}

                        </div>


                    </div>


                </div>




                <div class="score">

                    Yaklaşan Maç

                </div>



            </div>


            `;


        });



    } catch(error) {


        console.error(error);


        box.innerHTML = "❌ Fikstür yüklenemedi.";


    }


}



loadFixtures();
