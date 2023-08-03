const carouselSale = document.querySelector(".container-shelf-product-sale"); 
const arrowIcons = document.querySelectorAll(".container-shelf-product-sale img")
const firstCardWithSale = carouselSale.querySelector(".card").offsetWidth; 

let isdraggingSaleSale = false, startXSale, startScrollLeftSale; 
let scrollWidthSale = carouselSale.scrollWidthSale - carouselSale.clientWidth; 

arrowIcons.forEach(btn => {
    btn.addEventListener('click', () =>{
        carouselSale.scrollLeft += btn.id === "left" ? -firstCardWithSale: firstCardWithSale; 

        showHideIconsSale(); 
        setTimeout(() => showHideIconsSale(),60); 
    })
})

const showHideIconsSale = () =>{
    arrowIcons[0].style.display = carouselSale.scrollLeft == 0 ? "none" : "flex"
    arrowIcons[1].style.display = carouselSale.scrollLeft == scrollWidthSale ? "none": "flex"; 
}

const dragStartSale = (e) =>{
    isdraggingSaleSale = true; 
    carouselSale.classList.add('draggingSale'); 

    startXSale = e.pageX; 
    startScrollLeftSale = carouselSale.scrollLeft; 
}

const draggingSale = (e) => {

    if(!isdraggingSaleSale) return; 
    carouselSale.scrollLeft = startScrollLeftSale - (e.pageX - startXSale);
}

const dragStopSale = () =>{
    isdraggingSaleSale = false; 
    carouselSale.classList.remove('draggingSale'); 
}



carouselSale.addEventListener('click', draggingSale); 
carouselSale.addEventListener('mousedown', dragStartSale); 
carouselSale.addEventListener('mouseup', dragStopSale); 