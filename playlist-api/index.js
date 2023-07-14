const express = require('express');
const app = express();

app.use(express.json());

let playlist = [
    { title: 'Always', artist: ['Daniel Caesar'], album: 'NEVER ENOUGH' },
    { title: 'Pluto Projector ', artist: ['Rex Orange County'], album: 'Pony' },
    { title: "IT'S YOU", artist: ['MAX', 'Keshi'], album: "IT'S YOU (feat. Keshi)" },
];

app.get('/playlist', (req, res) => {
    res.json(playlist)
});

app.post('/playlist', (req, res) => {
    playlist.push(req.body);
    res.json({
        message: "Success",
        data: req.body
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Playlist API is started on port ${port}`)
});