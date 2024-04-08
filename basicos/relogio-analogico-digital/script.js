let deg = 6;
let digitalElement = document.querySelector("#digital-clock");
let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let updateDigitalClock = () => {
    let actualTime = new Date();
    let hours = String(actualTime.getHours()).padStart(2, '0');
    let minutes = String(actualTime.getMinutes()).padStart(2, '0');
    let seconds = String(actualTime.getSeconds()).padStart(2, '0');

    digitalElement.textContent = `${hours} : ${minutes} : ${seconds}`;
};

let setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
};

setClock();
setInterval(setClock, 1000);

updateDigitalClock();
setInterval(updateDigitalClock, 1000);


// EXPLICAÇÃO CÓDIGO

// 360 , o relógio tem 12 horas portanto 360 / 12 = 30 graus por hora

// HORAS
// 6horas * 30 = 270deg

// MINUTOS
// 15 minutos * 6 = 192deg

// deg = 6 pois o ponteiro dos minutos precisa percorrer os 360 graus em 60 minutos portanto 360 / 60 = 6

// SEGUNDOS-> MESMA COISA DOS MINUTOS

// DEFINIR ÂNGULOS PARA O CSS

// HORAS

// angulo do ponteiro da hora + angulo do ponteiro dos minutos

// MINUTOS E SEGUNDOS

// so repetir o angulo ja calculado
