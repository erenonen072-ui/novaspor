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

                    <h3>
                        ${match.teams.home.name}
                        🆚
                        ${match.teams.away.name}
                    </h3>

                    <p>📅 ${new Date(match.fixture.date).toLocaleString("tr-TR")}</p>

                    <p>🏟️ ${match.fixture.venue?.name || "Açıklanmadı"}</p>

                    <p>📍 ${match.fixture.venue?.city || ""}</p>

                    <p>📺 Durum: ${match.fixture.status.long}</p>

                </div>
            `;

        });

    } catch (error) {

        console.error(error);

        box.innerHTML = "❌ Fikstür yüklenemedi.";

    }

}

loadFixtures();
