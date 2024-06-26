// Navbar

const cartBtn = document.querySelector('#cart-icon')
const navBar = document.querySelector('.nav')
const dropDownMenu = document.querySelector('.dropDown')
const barsMenu = document.querySelector('#bars-icon')
const cartContent = document.querySelector('.cart-content')
const overlay = document.querySelector('.overlay')


// Display bars-menu.


const dropDown = () => {
    dropDownMenu.classList.toggle('dropDown-display')
    cartContent.classList.remove('cart-content-display')
}

// Close bars-menu when clicked.


const closeOnClick = (e) => {
    if (!e.target.classList.contains('nav-link')) return
    dropDownMenu.classList.remove('dropDown-display')
    cartContent.classList.remove('cart-content-display')
    overlay.classList.remove("show-overlay");
}


// Display cart-content and overlay.


const cartContentDisplay = () => {
    cartContent.classList.toggle('cart-content-display')
    dropDownMenu.classList.remove('dropDown-display')
    overlay.classList.toggle("show-overlay");

}


// Close on scroll.


const closeOnScroll = () => {
    if (
        dropDownMenu.classList.contains('dropDown-display') ||
        cartContent.classList.contains('cart-content-display')
    ) {
        dropDownMenu.classList.remove('dropDown-display')
        cartContent.classList.remove('cart-content-display')
        overlay.classList.remove("show-overlay");
    }
}


// Close bars-menu or cart when click on overlay


const closeOnOverlayClick = () => {
    cartContent.classList.remove('cart-content-display')
    dropDownMenu.classList.remove('dropDown-display')
    overlay.classList.toggle("show-overlay");
};


// Init navbar section.


export const navSectionInit = () => {
    barsMenu.addEventListener('click', dropDown)
    dropDownMenu.addEventListener('click', closeOnClick)
    navBar.addEventListener('click', closeOnClick)
    cartBtn.addEventListener('click', cartContentDisplay)
    window.addEventListener('scroll', closeOnScroll)
    overlay.addEventListener('click', closeOnOverlayClick)
}
