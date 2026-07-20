export default async function handler(req, res) {

    try {

        const now = new Date();

        let season;


        // Futbol sezonu genelde ağustos ayında başlar
        if (now.getMonth() + 1 >= 8) {
            season = now.getFullYear();
        } else {
            season = now.getFullYear() - 1;
        }



        const response = await fetch(
            `https://v3.football.api-sports.io/fixtures?league=203&season=${season}`,
            {
                headers: {
                    "x-apisports-key": process.env.API_KEY
                }
            }
        );


        const data = await response.json();


        res.status(200).json(data);



    } catch (error) {


        res.status(500).json({
            error: error.message
        });


    }

}
