const title = document.querySelector('#title');
const exit = document.querySelector('#exit');
const arch = document.querySelector('#arch');
const pill = document.querySelector('#pill');
const desc = document.querySelector('#desc');
const trigger = document.querySelector('#trigger');
const warning = document.querySelector('#warning');

function animateThings(){

    setTimeout(function(){
        title.classList.remove('hidden');
        title.classList.add('animate__animated', 'animate__fadeInDown');
    }, 600);

    setTimeout(function(){
        exit.classList.remove('hidden');
        exit.classList.add('animate__animated', 'animate__fadeInRight')
    }, 1200);

    setTimeout(function(){
        arch.classList.remove('hidden');
        arch.classList.add('animate__animated', 'animate__fadeInRight')
    }, 1700)

    setTimeout(function(){
        pill.classList.remove('hidden');
        pill.classList.add('animate__animated', 'animate__fadeInLeft');
    }, 2300)

    setTimeout(function(){
        desc.classList.remove('hidden');
        desc.classList.add('animate__animated', 'animate__fadeInUp');
    }, 2900)

    setTimeout(function(){
        trigger.classList.remove('hidden');
        trigger.classList.add('animate__animated', 'animate__fadeInUp');
    }, 3800)

}

animateThings();

trigger.addEventListener('click', showTrigger);

function showTrigger(){

    trigger.classList.remove('animate__fadeInUp');
    trigger.classList.add('animate__fadeOutUp');

    setTimeout(function(){
        warning.classList.remove('hidden');
        warning.classList.add('animate__animated', 'animate__fadeInUp')
    }, 500)

}

exit.addEventListener('click', exitOut);

function goBack(){
    exit.classList.remove('animate__fadeInRight');
    exit.classList.add('animate__fadeOutLeft');

    setTimeout(function(){
        window.location.href= "landing.html"
    }, 500);
}


