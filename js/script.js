const tema = new Audio ('./ost/theme.mp3')
const dead = new Audio ('./ost/dead.mp3')
let pontuacao = document.getElementById('pontos')
let pontos = -13
const scoreBoardPosition = document.querySelector('.score')
const mario = document.querySelector('.mario');
const idle = document.querySelector('.idle')
const clouds = document.querySelector('.clouds')
const text = document.querySelector('.text')
const continuar = document.querySelector('.continue')

function jump(){
    mario.classList.add('jump');

    setTimeout(() =>{

        mario.classList.remove('jump');
    }, 500);
}

const ganharPontos = () => {
    pontos = pontos + 0.1
    if (pontos >= 0) {
        pontuacao.textContent = Math.trunc(pontos)
    }
}

const loop = setInterval(() =>{
    tema.play()
    const idlePosition = idle.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
    const html = document.querySelector('html');

    console.log(idlePosition)

    if (idlePosition <= 100 && idlePosition > 0 && marioPosition < 80){

        idle.style.animation = 'none';
        idle.style.left = `${idlePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './imgs/gameover.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        tema.pause()
        dead.play()

        clouds.style.animation = 'none';
        clouds.style.display = 'none';

        text.style.display = 'flex';
        continuar.style.display = 'flex';
        /*Interrompe o loop*/
        clearInterval(loop);
        // adiciona um ouvinte de evento 'click'
        html.addEventListener('click', function() {
        // recarrega a página
        location.reload();
        });

        // adiciona um ouvinte de evento 'keypress'
        document.addEventListener('keydown', function() {
        // recarrega a página
        location.reload();
        });

        // adiciona um ouvinte de evento 'touchstart'
        document.addEventListener('touchstart', function() {
        // recarrega a página
            location.reload();
            });
    } else {
        ganharPontos()
    }
},10);
document.addEventListener('keydown', jump);
document.addEventListener('click', jump);
document.addEventListener('touchstart', jump);