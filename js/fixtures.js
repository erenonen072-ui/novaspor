console.log("YENİ FIXTURES DOSYASI");

async function loadFixtures() {

    const box = document.getElementById("fixtures");

    if (!box) {
        console.log("fixtures alanı bulunamadı");
        return;
    }


    box.innerHTML = "📅 Fikstür yükleniyor...";


    try {


        const response = await fetch("/api/fixtures");


        console.log("API cevap kodu:", response.status);


        const data = await response.json();


        console.log("API verisi:", data);



        if (!data.response || data.response.length === 0) {


            box.innerHTML = "⚽ Fikstür bulunamadı.";

            return;

        }



        box.innerHTML = "";



        data.response.slice(0,30).forEach(match => {


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

                    ${
                        match.goals.home !== null
                        ? match.goals.home + " - " + match.goals.away
                        : "Yakında"
                    }

                </div>



            </div>

            `;


        });


        console.log("Fikstür kartları hazır");


    } catch(error) {


        console.error("HATA:", error);


        box.innerHTML = "❌ Fikstür yüklenemedi.";

    }


}



loadFixtures();
