const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
    const filePath = path.join(__dirname, '../public/index.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading index.html');
            return;
        }
        res.status(200).send(data);
    });
};