let music = document.querySelector("audio");
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let musicDuration = document.querySelector(".end");
let image = document.querySelector("img");
let musicName = document.querySelector(".music-title");
let artist = document.querySelector(".artist");

// Objeto com as propriedades da música
let musicList = [
    {title:'Guitar Solo', artista:'Jõao Feijão', src:'musicas/musics/Killing Joke - The Death And Resurrection Show.mp3', img:'img/img1.jpeg'}
]

musicDuration.textContent = convertTime(Math.floor(music.duration));
//Atualiza a duração total da música no visor

// Aguarda a música ser carregada para mostrar a duração
music.addEventListener('loadedmetadata', function() {
    musicDuration.textContent = convertTime(Math.floor(music.duration));
});

play.addEventListener("click", playSong);
pause.addEventListener("click", pauseSong);
music.addEventListener("timeupdate", updateBar); //timeupdate

function playSong() {
    music.play();
    pause.style.display = "block";
    play.style.display = "none";
}

function pauseSong() {
    music.pause();
    pause.style.display = "none";
    play.style.display = "block";
}

function updateBar() {
    let bar = document.querySelector("progress");

    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + "%";
    // Calcula a porcentagem de duração da música e atribui ao valor de width da barra de progresso, o math.floor arredonda o valor
    let timePassed = document.querySelector(".start");
    timePassed.textContent = convertTime(Math.floor(music.currentTime)); //Tempo percorrido da música
}

function convertTime(timeSeconds) {
    let minute = Math.floor((timeSeconds / 60)); //Obtem os minutos
    let seconds = (timeSeconds % 60); // Obtem os segundos após o cálculo dos minutos
    if (seconds < 10) { // Adiciona uma 0 à frente dos segundos menores que 10
        seconds = "0" + seconds;
    }

    return minute + ":" + seconds;
}