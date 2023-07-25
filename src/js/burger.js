
/******WORKS****/
// let intervalId;

// const menuBtn = document.querySelector('.hamburger');
// // let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//     const menu = menuBtn.dataset.path;
//     // console.log(menu);

//     const dropMenu = document.querySelector('.dropdown-menu');
//     if(!document.querySelector(`[data-target=${menu}]`).classList.contains('drop')){
//         document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
//         intervalId = setTimeout(() => {
//             document.querySelector(`[data-target=${menu}]`).classList.add('drop');
//         }, 5);
//     }

//     if(document.querySelector(`[data-target=${menu}]`).classList.contains('drop')){
//         clearTimeout(intervalId);
//         document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');

//         intervalId = setTimeout(() => {
//             document.querySelector(`[data-target=${menu}]`).classList.remove('drop');
//         }, 5);
//     }

//     // window.onclick = menuBtn => {
//     //     if (menuBtn == document.querySelector(`[data-target=${menu}]`) || menuBtn == document.querySelector(`[data-path=${menu}]`)){
//     //         return;
//     //     }else{
//     //         document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
//     //         document.querySelector(`[data-target=${menu}]`).classList.remove('drop');
//     //     }
//     // }




//     // if(!menuOpen) {
//     //     menuBtn.classList.add('open');
//     //     menuOpen = true;

//     // }else{
//     //     menuBtn.classList.remove('open');
//     //     menuOpen = false;
//     // }

// });

/*******/ 


// const menuBtn = document.querySelector('.hamburger');

// const menuNav = document.querySelector('.nav__menu');

// menuBtn.addEventListener('click', () =>{
//     menuBtn.classList.toggle("active");
//     menuNav.classList.toggle("active");
// })
// document.querySelectorAll('.nav__link').forEach(n => n.addEventListener("click", () => {
//     menuBtn.classList.remove("active");
//     menuNav.classList.remove("active");
// }))




/*TEST*/ 

// const menuBtn = document.querySelector('.hamburger');

// const menuNav = document.querySelector('.nav__menu');

// // let mediaScreen = window.matchMedia('(max-width: 768px)')

// window.addEventListener('click', menu)

// function menu(e) {
//     if (e.target.closest('.hamburger')){
//         menuBtn.classList.toggle("active");
//         menuNav.classList.toggle("active");
//     }
//     if (!e.target.closest('.hamburger')){
//         menuBtn.classList.remove("active");
//         menuNav.classList.remove("active");
//     }
//     // if (e.target.closest('.hamburger') &&!mediaScreen.matches){
//     //     // menuBtn.classList.remove("active");
//     //     menuNav.classList.remove("active");
//     // }
// }

// document.querySelectorAll('.nav__link').forEach(n => n.addEventListener("click", () => {
    
//     menuBtn.classList.remove("active");
//     menuNav.classList.remove("active");
// }))



const menuBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const navigation = document.querySelector(".mobile");

menuBtn.addEventListener('click', () => {
    navigation.classList.add('active');
});
closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});