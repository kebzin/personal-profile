// SKILOL TABS//
const tabs = document.querySelectorAll('[data-target]')
tabContent = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener("click", () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills_active')
        })
        target.classList.add('skills_active')

        tabContent.forEach(tab => {
            tab.classList.remove("skills_active")
        })
        tab.classList.add('skills_active')
    })
})

// =====mixed setup

// var mixerPortfolio = mixitup('.work_container', {
//     selectors: {
//         target: '.work_card'
//     },
//     animation: {
//         duration: 300
//     }
// });




let work_item = document.querySelectorAll('.work_item');
let current_element = work_item[0]
work_item.forEach(el => {
    el.addEventListener('click', () => {
        if (current_element !== el){
            current_element.classList.remove('active_work')
        }
        el.classList.add('active_work')
        current_element = el
    })
})

// WORD POPPUP


let work_button = document.querySelector('.work_button')
let portfolio_popup = document.querySelectorAll('.portfolio_popup')
work_button.addEventListener('click', (k) =>{
    k.portfolio_popup.style.display =  "flex";
   
} )

// function togglepr0rtfolior() {
//     document.querySelector('.portfolio_popup').classList.toggle("open")
// }




// MENUUE HISSWN A D SHOW 

let menue_open = document.querySelector( ".menue_open");
let second_nav = document.querySelector(".second_nav");
let second_nav_toggle = document.querySelectorAll(".second_nav a")
menue_open.addEventListener("click", () =>{
     second_nav.classList.toggle("second_nav_toggle")
   
    
    });

    console.log(second_nav);
    console.log(menue_open);
    console.log(second_nav_toggle);

