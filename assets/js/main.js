// ================ Menu show Y hidden
const navMenu = document.getElementById('nav-menu'),
      navToggle =document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

//  Menu show
// validate if constante exists
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}


// =================== Menu hidden ===
// validate if constant exists
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on each link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


//====================== accordion skills
const skillsContent =document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className =  'skills__content skills__open'
    }
}

skillsHeader.forEach( (el) =>{
    el.addEventListener('click', toggleSkills)
})

//======================= qualification tabs
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

//================= services modal
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
// ================ portfolio swiper
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable : true,
    },
    mousewheel: true,
    keyboard: true,
});

//================ testimonial

// ================== scroll section active link

// ================= change background header 