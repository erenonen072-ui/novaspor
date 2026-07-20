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

        box.innerHTML = "";

        data.response.forEach(match => {

            box.innerHTML += `
                <div class="match-card">

                    <div class="teams">
                        <strong>${match.teams.home.name}</strong>
                        <span class="vs">🆚</span>
                        <strong>${match.teams.away.name}</strong>
                    </div>

                    <div class="match-info">
                        📅 ${new Date(match.fixture.date).toLocaleString("tr-TR")}<br>
                        🏟️ ${match.fixture.venue?.name || "Stadyum açıklanmadı"}<br>
                        📍 ${match.fixture.venue?.city || ""}
                    </div>

                </div>
            `;

        });

    } catch (error) {

        console.error(error);
        box.innerHTML = "❌ Fikstür yüklenemedi.";

    }

}

loadFixtures();
