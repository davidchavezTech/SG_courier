let navbar = document.querySelector('.navbar')
let burgerBtn = document.querySelector('.burger')
let nosotrosTextDiv = document.querySelector('.nosotros-text-div')
let serviciosText = document.querySelector('#servicios-text')
let sucursalesTitle = document.querySelector('.sucursales-title-cont')
let rect = navbar.getBoundingClientRect();
let containerDiv = document.querySelector('.sucursales-images-cont')
let verMasCont = document.querySelector('.ver-mas-cont')
let verMasText = document.querySelector('.ver-mas')

let portnumber = window.location.port
    if(portnumber){
        portnumber = ":" + portnumber
    }else{
        portnumber = ""
    }
let counter = 0
let counter2 = 0
verMasCont.addEventListener('click', ()=>{
  	containerDiv.classList.toggle('expand')
})
verMasCont.addEventListener('click', ()=>{
    if(counter2 == 0){
      verMasText.innerHTML = "Ver menos"
      counter2 = 1
    }else if(counter2 == 1 ){
      verMasText.innerHTML = "Ver más"
      counter2 = 0
    }
})
burgerBtn.addEventListener('click', ()=>{
  navbar.classList.toggle('expand-burger')
  
  
  if(counter == 0){
    burgerBtn.src = 'img/burger-close.svg'
    counter = 1
  }else if(counter == 1){
    burgerBtn.src = 'img/burger.svg'
    counter = 0
  }
})
// console.log(rect.top, rect.right, rect.bottom, rect.left);
// console.log(window.scrollY)
// console.log(window.innerHeight/1.2)
window.addEventListener('scroll', ()=>{
    let navBarY = getOffset(navbar).top
    let sucursalesTitleY = getOffset(sucursalesTitle).top
    let serviciosTextY = getOffset(serviciosText).top
    let nosotrosTextDivY = getOffset(nosotrosTextDiv).top
    let scrollListener = this.scrollY
    if(scrollListener >= navBarY){
        if(navbar.classList == "navbar"){
            navbar.classList.add('nav-color')
        }
        console.log('Passed')
    }else if(scrollListener <= navBarY){
        if(navbar.classList == "navbar nav-color"){
            navbar.classList.remove('nav-color')
        }
    }if(scrollListener >= sucursalesTitleY - window.innerHeight/1.4){
		sucursalesTitle.classList.add('text-appear')
	}if(scrollListener >= serviciosTextY - window.innerHeight/1.4){
		serviciosText.classList.add('text-appear')
	}if(scrollListener >= nosotrosTextDivY - window.innerHeight/1.4){
		nosotrosTextDiv.classList.add('text-appear')
	}
})
function getOffset(element) {
    const rect = element.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }
console.log(getOffset(navbar).top)

//-----------SLIDER----------------

// buttons
var sliderControl = document.querySelector(".slider-control");

// slides informations
var slides = document.querySelectorAll(".slide"),
    slidesLength = slides.length;

// slides array
var slidesArr = [].slice.call(slides);

// reverse array sorting
slidesArr = slidesArr.reverse();

// slide current
var slideCurrent = 0;

sliderControl.addEventListener("click", function(e){
  target = e.target;
  
  // get next button
  if(target.classList.contains("next")){

    next = e.target,
    prev = next.previousElementSibling,
    nextSlide = slidesArr[slideCurrent + 1],
    slide = slidesArr[slideCurrent];
    
    slide.classList.add("slide-on");
    slide.classList.remove("text-on");
    nextSlide.classList.add("text-on");
    
    slideCurrent += 1;
    
    if(slideCurrent > 0) {
      prev.classList.remove("disabled");
    }
    
    if(slideCurrent === slidesLength - 1){
      next.classList.add("disabled");
    }
  }
  
  // get prev button
  if(target.classList.contains("prev")){
    
    slideCurrent -= 1;
    
    prev = e.target,
    next = prev.nextElementSibling,
    prevSlide = slidesArr[slideCurrent + 1],
    slide = slidesArr[slideCurrent];
    
    prevSlide.classList.remove("text-on");
    slide.classList.remove("slide-on");
    slide.classList.add("text-on");
    
    if(slideCurrent === slidesLength - 2){
      next.classList.remove("disabled");
    }

    if(slideCurrent === 0){
      prev.classList.add("disabled");
    }
    
  }

});