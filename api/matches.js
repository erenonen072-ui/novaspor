export default async function handler(req, res) {

    try {

        const today = new Date().toISOString().split("T")[0];


        const response = await fetch(
            `https://www.thesportsdb.com/api/v1/json/123/eventsday.php?d=${today}&s=Soccer`
        );


        const data = await response.json();


        res.status(200).json(data);


    } catch(error){

        res.status(500).json({
            error:error.message
        });

    }

}
