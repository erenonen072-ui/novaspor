export default async function handler(req, res) {

    try {

        const response = await fetch(
            "https://api.sportmonks.com/v3/football/fixtures?api_token=" 
            + process.env.SPORTMONKS_API_TOKEN
        );


        const data = await response.json();


        res.status(200).json(data);


    } catch(error) {

        res.status(500).json({
            error:error.message
        });

    }

}
