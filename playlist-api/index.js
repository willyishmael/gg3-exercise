const express = require('express');
const app = express();

app.use(express.json());

let playlist = [
    { title: 'Always', artist: ['Daniel Caesar'], album: 'NEVER ENOUGH' },
    { title: 'Pluto Projector ', artist: ['Rex Orange County'], album: 'Pony' },
    { title: "IT'S YOU", artist: ['MAX', 'Keshi'], album: "IT'S YOU (feat. Keshi)" },
];

let nowPlayingIndex = 0;
let nowPlaying = null;

app.get('/playlist', (req, res) => {
    res.json(playlist)
});

app.post('/playlist', (req, res) => {
    playlist.push(req.body);
    res.json({
        message: "Success",
        song: req.body
    });
});

app.get('/nowplaying', (req, res) => {
    if (nowPlaying === null) {
        res.json({
            message: "No music is playing"
        })
    } else {
        res.json({
            message: "Now playing",
            song: nowPlaying
        })
    }
})

app.get('/play', (req, res) => {
    if (nowPlaying === null) {
        nowPlayingIndex = 0;
        nowPlaying = playlist[nowPlayingIndex]
    }

    res.json({
        message: "Play",
        song: nowPlaying
    })
});

app.get('/stop', (req, res) => {
    nowPlaying = null;
    res.json({
        message: "Stop",
    })
})

app.get('/next', (req, res) => {
    if (nowPlayingIndex < playlist.length-1) {
        nowPlayingIndex++
    } else {
        nowPlayingIndex = 0
    }
    
    nowPlaying = playlist[nowPlayingIndex]
    res.json({
        message: "Next",
        song: nowPlaying
    })
})

const port = 3000;
app.listen(port, () => {
    console.log(`Playlist API is started on port ${port}`)
});