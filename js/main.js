async function loadMatches() {
    try {
        const response = await fetch("/api/matches");
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

loadMatches();
