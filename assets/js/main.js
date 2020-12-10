function timer() {
    const cronometro = document.querySelector('p');
    const botaoIniciar = document.querySelector('#botaoIniciar');
    const botaoPausar = document.querySelector('#botaoPausar');
    const botaoResetar = document.querySelector('#botaoResetar');

    let h = 0;
    let min = 0;
    let s = 0;
    let intervalo;

    botaoIniciar.addEventListener('click', () => {
        clearInterval(intervalo);
        cronometro.style.color = 'rgb(235, 217, 255)';
        intervalo = setInterval(() => {
            relogio();
        }, 1000);

    });

    botaoPausar.addEventListener('click', () => {
        cronometro.style.color = 'rgb(241, 12, 12)';
        clearInterval(intervalo);
    });

    botaoResetar.addEventListener('click', () => {
        cronometro.style.color = 'rgb(235, 217, 255)';
        clearInterval(intervalo);
        h = 0;
        min = 0;
        s = 0;

        cronometro.innerHTML = `00:00:00`;
    });

    function relogio() {
        s++;

        if (s === 60) {
            s = 0
            min++;
        }

        if (min === 60) {
            min = 0;
            h++;
        }

        const seg = (s >= 10 && s < 60) ? `${s}` : `0${s}`;
        const minut = (min >= 10 && min < 60) ? `${min}` : `0${min}`;
        const hour = (h >= 10 && h < 60) ? `${h}` : `0${h}`;
        cronometro.innerHTML = `${hour}:${minut}:${seg}`;
    }
}
timer();

