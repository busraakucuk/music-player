const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time')
const durationEl = document.getElementById('duration')
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const songs = [
    {
        name: 'lavender-haze',
        displayName: 'Lavender Haze',
        artist: 'Taylor Swift',
    },
    {
        name: 'maroon',
        displayName: 'Maroon',
        artist: 'Taylor Swift',
    },
    {
        name: 'anti-hero',
        displayName: 'Anti Hero',
        artist: 'Taylor Swift',
    },
    {
        name: 'snow-on-the-beach',
        displayName: 'Snow On The Beach',
        artist: 'Taylor Swift',
    },
    {
        name: 'kid',
        displayName: "You're On Your Own, Kid",
        artist: 'Taylor Swift',
    },
    {
        name: 'midnight-rain',
        displayName: 'Midnight Rain',
        artist: 'Taylor Swift',
    },
    {
        name: 'question',
        displayName: 'Question...?',
        artist: 'Taylor Swift',
    },
    {
        name: 'vigilante-shit',
        displayName: 'Vigilante Shit',
        artist: 'Taylor Swift',
    },
    {
        name: 'bejeweled',
        displayName: 'Bejeweled',
        artist: 'Taylor Swift',
    },
    {
        name: 'labyrinth',
        displayName: 'Labyrinth',
        artist: 'Taylor Swift',
    },
    {
        name: 'karma',
        displayName: 'Karma',
        artist: 'Taylor Swift',
    },
    {
        name: 'sweet-nothing',
        displayName: 'Sweet Nothing',
        artist: 'Taylor Swift',
    },
    {
        name: 'mastermind',
        displayName: 'Mastermind',
        artist: 'Taylor Swift',
    },
    {
        name: 'great-war',
        displayName: 'The Great War',
        artist: 'Taylor Swift',
    },
    {
        name: 'bigger',
        displayName: 'Bigger Than The Whole Sky',
        artist: 'Taylor Swift',
    },
    {
        name: 'paris',
        displayName: 'Paris',
        artist: 'Taylor Swift',
    },
    {
        name: 'high-infidelity',
        displayName: 'High Infidelity',
        artist: 'Taylor Swift',
    },
    {
        name: 'glitch',
        displayName: 'Glitch',
        artist: 'Taylor Swift',
    },
    {
        name: 'wcs',
        displayName: "Would've Could've Should've",
        artist: 'Taylor Swift',
    },
    {
        name: 'dear-reader',
        displayName: 'Dear Reader',
        artist: 'Taylor Swift',
    },
    
];

let isPlaying = false;

function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause')
    music.play();

}

function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play')
    music.pause();

}

playBtn.addEventListener('click', ()=>(isPlaying ? pauseSong() : playSong()))

function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`
}

let songIndex = 0;

function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length-1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong(){
    songIndex++;
    if(songIndex > songs.length - 1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

loadSong(songs[songIndex]);

function updateProgressBar(e){
    if(isPlaying) {
        const {duration, currentTime} = e.srcElement;
        const progressPercentage = (currentTime / duration) * 100
        progress.style.width = `${progressPercentage}%`

        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60)
        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`
        }
        if (durationSeconds){
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`
        }

        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60)
        if (currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`
        }
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`

    }
}

function setProgressBar(e) {
    const width = this.clientWidth;
    console.log(width);
    const clickX = e.offsetX;
    console.log(clickX);

    const { duration } = music;
    music.currentTime = (clickX / width) * duration;
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('ended', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgressBar);