const carousel = document.querySelector(".container-carousel"); 
const arrowBtns = document.querySelectorAll(".container-shelf-product img")
const firstCardWith = carousel.querySelector(".card").offsetWidth; 

let isDragging = false, startX, startScrollLeft; 
let scrollWidth = carousel.scrollWidth - carousel.clientWidth; 

arrowBtns.forEach(btn => {
    btn.addEventListener('click', () =>{
        carousel.scrollLeft += btn.id === "left" ? -firstCardWith: firstCardWith; 

        showHideIcons(); 
        setTimeout(() => showHideIcons(),60); 
    })
})

const showHideIcons = () =>{
    arrowBtns[0].style.display = carousel.scrollLeft == 0 ? "none" : "flex"
    arrowBtns[1].style.display = carousel.scrollLeft == scrollWidth ? "none": "flex"; 
}

const dragStart = (e) =>{
    isDragging = true; 
    carousel.classList.add('dragging'); 

    startX = e.pageX; 
    startScrollLeft = carousel.scrollLeft; 
}

const dragging = (e) => {

    if(!isDragging) return; 
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () =>{
    isDragging = false; 
    carousel.classList.remove('dragging'); 
}



carousel.addEventListener('click', dragging); 
carousel.addEventListener('mousedown', dragStart); 
carousel.addEventListener('mouseup', dragStop); 