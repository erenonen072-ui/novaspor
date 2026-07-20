export default async function handler(req, res) {

    try {

        const now = new Date();

        let season;

        if (now.getMonth() + 1 >= 8) {
            season = now.getFullYear();
        } else {
            season = now.getFullYear() - 1;
        }


        async function getFixtures(year) {

            const response = await fetch(
                `https://v3.football.api-sports.io/fixtures?league=203&season=${year}`,
                {
                    headers: {
                        "x-apisports-key": process.env.API_KEY
                    }
                }
            );

            return await response.json();

        }



        let data = await getFixtures(season);



        // Yeni sezonda veri yoksa önceki sezona bak
        if (!data.response || data.response.length === 0) {

            data = await getFixtures(season - 1);

        }



        res.status(200).json(data);



    } catch (error) {


        res.status(500).json({
            error: error.message
        });


    }

}
