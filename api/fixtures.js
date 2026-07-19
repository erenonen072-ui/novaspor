function loadFixtures(){

    const box = document.getElementById("fixtures");

    if(!box) return;


    const matches = [
        {
            home:"Galatasaray",
            away:"Fenerbahçe",
            date:"20 Temmuz 2026 20:00"
        },
        {
            home:"Beşiktaş",
            away:"Trabzonspor",
            date:"21 Temmuz 2026 19:00"
        },
        {
            home:"Samsunspor",
            away:"Başakşehir",
            date:"22 Temmuz 2026 18:30"
        }
    ];


    box.innerHTML="";


    matches.forEach(match=>{

        box.innerHTML += `

        <div class="match">

            <h3>
            ${match.home}
            ⚽
            ${match.away}
            </h3>

            <p>
            📅 ${match.date}
            </p>

        </div>

        `;

    });

}


loadFixtures();
