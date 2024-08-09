const axios = require('axios');

module.exports = async (req, res) => {
    const gifName = req.query.q;
    const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

    console.log('Received query:', req.query);

    try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
            params: {
                api_key: GIPHY_API_KEY,
                q: gifName,
                limit: req.query.limit || 20
            }
        });

        console.log('Giphy API response:', response.data);

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching GIFs from Giphy:', error);
        res.status(500).send('Error fetching GIFs from Giphy');
    }
};