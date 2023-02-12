//intro animation
function animateIntro(){

function ani1(){
    const part1 = document.querySelector("#an");
    part1.classList.add('animate__animated', 'animate__fadeInRight');

    setTimeout(function(){
        const part2 = document.querySelector('#im');
        part2.classList.remove('hidden');
        part2.classList.add('animate__animated', 'animate__fadeInLeft');
    }, 1000);
}
ani1();

function ani2(){
    setTimeout(function(){
        const part3 = document.querySelector('#ay');
        part3.classList.remove('hidden');
        part3.classList.add('animate__animated', 'animate__fadeInRight');
    }, 1800);

    setTimeout(function(){
        const part4 = document.querySelector('#be');
        part4.classList.remove('hidden');
        part4.classList.add('animate__animated', 'animate__fadeInLeft');
    }, 2700)
}

ani2();

}

animateIntro();

function animateOut(){
    const part1 = document.querySelector('#an');
    const part2 = document.querySelector('#im');
    const part3 = document.querySelector('#ay');
    const part4 = document.querySelector('#be');

    setTimeout(function(){

        part1.classList.remove('animate__fadeInRight');
        part1.classList.add('animate__fadeOut');
    }, 3500)

    setTimeout(function(){
        part2.classList.remove('animate__fadeInRight');
        part2.classList.add('animate__fadeOut');
    }, 4300)

    setTimeout(function(){
        part3.classList.remove('animate__fadeInRight');
        part3.classList.add('animate__fadeOut');
    }, 5000)

    setTimeout(function(){
        part4.classList.remove('animate__fadeInRight');
        part4.classList.add('animate__fadeOut');
    }, 5800)

}

animateOut();

function turnGreen(){
    const greenBlock = document.querySelector('#green');

    setTimeout(function(){
        greenBlock.classList.remove('hidden');
        greenBlock.classList.add('animate__animated', 'animate__fadeIn');
    }, 6800);

}

setTimeout(function(){
    window.location.href =  "landing.html"
}, 8000);

turnGreen();

