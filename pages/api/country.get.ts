import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (!req.query.q) return res.status(400).send("a 'q' parameter is required!");

    const { data: countryData } = await axios.get(`https://restcountries.com/v3.1/translation/${req.query.q}`);
    const { data: costOfLivingData } = await axios.get("https://cost-of-living-and-prices.p.rapidapi.com/prices", {
        params: {
            city_name: countryData[0].capital[0],
            country_name: countryData[0].name.common
        },
        headers: {
            "X-RapidAPI-Key": "76748855f7msh4ad92a60990e68bp11d21bjsn1a4e2ff22664",
            "X-RapidAPI-Host": "cost-of-living-and-prices.p.rapidapi.com"
        }
    });

    res.status(200).json({ ...countryData[0], ...costOfLivingData });
}
