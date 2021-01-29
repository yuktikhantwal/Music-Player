const music = document.querySelector("audio")
const play = document.getElementById("play")
const icon = document.querySelector("img")
const title = document.getElementById("title")
const artist = document.getElementById("artist")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

const songs = [
    {
    filename: "Beyond The Sea",
    title: "Beyond The Sea",
    artist: "Robbie Williams"
    },
    {
    filename: "Hotline Bling",
    title: "Hotline Bling",
    artist: "Drake"
    },
    {
    filename: "Jee Le Zara",
    title: "Jee Le Zara",
    artist: "Vishal Dadlani"
    },
    {
    filename: "Rehna Tu",
    title: "Rehna Tu",
    artist: "A.R. Rahman"
    }
]

let playing = true 
let i = 0
let n = songs.length

play.addEventListener("click",() => {
    if(playing) {
        music.play();
        play.classList.replace("fa-play","fa-pause");
        icon.classList.add("anime");
        playing = false;
    }

    else {
        music.pause();
        play.classList.replace("fa-pause","fa-play");
        icon.classList.remove("anime");
        playing = true;
    }
})

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.filename + ".mp3";
}

prev.addEventListener("click",() => {
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    icon.classList.remove("anime");
    playing = true;

    i = i-1;
    if(i<0) i = n+i;
    loadSong(songs[i]); 
})

next.addEventListener("click",() => {
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    icon.classList.remove("anime");
    playing = true;
    
    i = i+1;
    i = i%n;
    loadSong(songs[i]); 
})

loadSong(songs[i]);