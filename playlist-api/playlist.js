let playlist = [
    { title: 'Always', artist: ['Daniel Caesar'], album: 'NEVER ENOUGH' },
    { title: 'Pluto Projector ', artist: ['Rex Orange County'], album: 'Pony' },
    { title: "IT'S YOU", artist: ['MAX', 'Keshi'], album: "IT'S YOU (feat. Keshi)" },
];

let nowPlayingIndex = 0;
let nowPlaying = null;

export function show() {
    return(playlist);
}

export function addToPlaylist(song) {
    playlist.push(song);
    return({
        message: "Add a song to playlist",
        song: song
    })
}

export function nowPlaying() {
    if (nowPlaying === null) {
        return({ message: "No music is playing" })
    } else {
        return({
            message: "Now playing",
            track: nowPlayingIndex+1,
            song: nowPlaying
        })
    }
}

export function play() {
    if (nowPlaying === null) {
        nowPlayingIndex = 0;
        nowPlaying = playlist[nowPlayingIndex]
    }

    return({
        message: "Play",
        track: nowPlayingIndex+1,
        song: nowPlaying
    })
}

export function pause() {
    return({
        message: "Pause",
        track: nowPlayingIndex+1,
        song: nowPlaying
    })
}

export function stop() {
    nowPlaying = null;
    return({
        message: "Stop",
    })
}

export function next() {
    if (nowPlayingIndex < playlist.length-1) {
        nowPlayingIndex++
    } else {
        nowPlayingIndex = 0
    }
    
    nowPlaying = playlist[nowPlayingIndex]
    return({
        message: "Next",
        track: nowPlayingIndex+1,
        song: nowPlaying
    })
}