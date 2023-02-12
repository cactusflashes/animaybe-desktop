//animate title and buttons in
function animateIn(){
    const title = document.querySelector('#title');
    title.classList.add('animate__animated', 'animate__fadeInUp');

    const nichijou = document.querySelector('#anime1');

    setTimeout(function(){
        nichijou.classList.remove('hidden');
        nichijou.classList.add('animate__animated', 'animate__fadeInUp');
    }, 800);

    const oddtaxi = document.querySelector('#anime2');
    
    setTimeout(function(){
        oddtaxi.classList.remove('hidden');
        oddtaxi.classList.add('animate__animated', 'animate__fadeInUp');
    }, 1400)

    const beastars = document.querySelector('#anime3');

    setTimeout(function(){
        beastars.classList.remove('hidden');
        beastars.classList.add('animate__animated', 'animate__fadeInUp');
    }, 2000)

    const banana = document.querySelector('#anime4');

    setTimeout(function(){
        banana.classList.remove('hidden');
        banana.classList.add('animate__animated', 'animate__fadeInUp');
    }, 2600)

    const househusband = document.querySelector('#anime5');
    
    setTimeout(function(){
        househusband.classList.remove('hidden');
        househusband.classList.add('animate__animated', 'animate__fadeInUp');
    }, 3200)

    const cells = document.querySelector('#anime6');

    setTimeout(function(){
        cells.classList.remove('hidden');
        cells.classList.add('animate__animated', 'animate__fadeInUp');
    }, 3800)

}

animateIn();


//page animationish

function turnWhiteN(){
   const whitebox = document.querySelector('#whitebox');
   whitebox.classList.remove('hidden');
   whitebox.classList.add('animate__animated', 'animate__fadeIn');

   setTimeout(function(){
    window.location.href = "nichijou.html";
   }, 500);
}

function turnWhiteO(){
    const whitebox = document.querySelector('#whitebox');
    whitebox.classList.remove('hidden');
    whitebox.classList.add('animate__animated', 'animate__fadeIn');
 
    setTimeout(function(){
     window.location.href = "oddtaxi.html";
    }, 500);
 }

function turnWhiteB(){
    const whitebox = document.querySelector('#whitebox');
    whitebox.classList.remove('hidden');
    whitebox.classList.add('animate__animated', 'animate__fadeIn');
 
    setTimeout(function(){
     window.location.href = "beastars.html";
    }, 500);
 }
 
 function turnWhiteF(){
    const whitebox = document.querySelector('#whitebox');
    whitebox.classList.remove('hidden');
    whitebox.classList.add('animate__animated', 'animate__fadeIn');
 
    setTimeout(function(){
     window.location.href = "banana.html";
    }, 500);
 }

 function turnWhiteH(){
    const whitebox = document.querySelector('#whitebox');
    whitebox.classList.remove('hidden');
    whitebox.classList.add('animate__animated', 'animate__fadeIn');
 
    setTimeout(function(){
     window.location.href = "househusband.html";
    }, 500);
 }

 function turnWhiteC(){
    const whitebox = document.querySelector('#whitebox');
    whitebox.classList.remove('hidden');
    whitebox.classList.add('animate__animated', 'animate__fadeIn');
 
    setTimeout(function(){
     window.location.href = "cells.html";
    }, 500);
 }
