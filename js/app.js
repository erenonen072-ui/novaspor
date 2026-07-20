async function loadMatches() {

    const box = document.getElementById("matches");

    if (!box) return;

    box.innerHTML = "Yükleniyor...";

    try {

        const response = await fetch("/api/matches");
        const data = await response.json();

        if (!data.response || data.response.length === 0) {
            box.innerHTML = "⚽ Şu anda canlı maç bulunmuyor.";
            return;
        }

        box.innerHTML = "";

        data.response.forEach(match => {

            box.innerHTML += `
                <div class="live-card">

                    <span class="live">🔴 CANLI</span>

                    <h3>${match.teams.home.name}</h3>

                    <h2>
                        ${match.goals.home} - ${match.goals.away}
                    </h2>

                    <h3>${match.teams.away.name}</h3>

                    <p>
                        ⏱ ${match.fixture.status.elapsed || 0}'
                    </p>

                </div>
            `;

        });

    } catch (e) {

        console.error(e);

        box.innerHTML = "❌ Canlı skor yüklenemedi.";

    }

}

loadMatches();
