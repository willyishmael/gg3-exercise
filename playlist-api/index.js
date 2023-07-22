import * as playlist from "./playlist.js";
import express from "express";

const app = express();
app.use(express.json());

app.route('/playlist')
    .get((req, res) => {
        res.json(playlist.show());
    })
    .post((req, res) => {
        res.json(playlist.addToPlaylist(req.body))
    })

app.get('/nowplaying', (req, res) => {
    res.json(playlist.nowPlaying());
})

app.get('/play', (req, res) => {
    res.json(playlist.play());
});

app.get('/pause', (req, res) => {
    res.json(playlist.pause());
})

app.get('/stop', (req, res) => {
    res.json(playlist.stop());
})

app.get('/next', (req, res) => {
    res.json(playlist.next());
})

const port = 3000;
app.listen(port, () => {
    console.log(`Playlist API is started on port ${port}`)
});