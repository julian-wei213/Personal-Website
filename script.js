// SPLASH INTRO
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo-intro');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
      logoSpan.forEach((span, idx)=> {
        setTimeout(()=>{
          span.classList.add('active');
        }, (idx + 1) * 400)
      });

      setTimeout(()=>{
        logoSpan.forEach((span, idx)=> {
          setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx + 1) * 400)
        })
      }, 800);

      setTimeout(()=> {
        intro.style.top = '-100vh';
      }, 1350);
    })
})

// HAMBURGER MENU
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Expand Project Description

function openProject1() {
  document.querySelector('.smalldesc1').classList.toggle('expand');
}

function openProject2() {
  document.querySelector('.smalldesc2').classList.toggle('expand');
}

function openProject3() {
  document.querySelector('.smalldesc3').classList.toggle('expand');
}

function openProject4() {
  document.querySelector('.smalldesc4').classList.toggle('expand');
}
