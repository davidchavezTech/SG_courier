let navbar = document.querySelector('.navbar')
let burgerBtn = document.querySelector('.burger')
let nosotrosTextDiv = document.querySelector('.nosotros-text-div')
let serviciosText = document.querySelector('#servicios-text')
let sucursalesTitle = document.querySelector('.sucursales-title-cont')
let rect = navbar.getBoundingClientRect();
let containerDiv = document.querySelector('.sucursales-images-cont')
let verMasCont = document.querySelector('.ver-mas-cont')
let verMasText = document.querySelector('.ver-mas')
let leftCtrl = document.querySelector('img.icon.ion-chevron-left')
let rightCtrl = document.querySelector('img.icon.ion-chevron-right')

if(screen.width <1024){
      let savedClass = leftCtrl.classList
      let savedSrc = leftCtrl.src
      let newDiv = document.createElement('div')
      newDiv.classList = savedClass
      // newDiv.src = savedSrc
      leftCtrl.parentNode.replaceChild(newDiv,leftCtrl)

      savedClass = rightCtrl.classList
      savedSrc = rightCtrl.src
      newDiv = document.createElement('div')
      newDiv.classList = savedClass
      // newDiv.src = savedSrc
      rightCtrl.parentNode.replaceChild(newDiv,rightCtrl)
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
    abortTimer()
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
    abortTimer()
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
var tid = setInterval(mycode, 2000);
function mycode() {
  console.log('ran')
  if(slideCurrent < slidesLength - 1){
    // next.classList.add("disabled");
    // debugger
    next = sliderControl.children[1]
    prev = sliderControl.children[0]
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
      // debugger
      next.classList.add("disabled");
      function resolveAfter2Seconds(time) {
        return new Promise(resolve => {
          setTimeout(() => { 
            // debugger
            slidesArr[3].classList.add("slide-on");
            slidesArr[3].classList.remove("text-on");
            slidesArr[0].classList.remove("slide-on");
            slidesArr[0].classList.add("text-on");
            prev.classList.add("disabled");
            next.classList.remove("disabled");
            slideCurrent = 0
            resolve(time);
          }, time);
        });
      }
      
      async function f1() {
        var x = await resolveAfter2Seconds(2000);
        console.log(x); // 10
        // debugger
        slidesArr[1].classList.remove("slide-on");
        slidesArr[2].classList.remove("slide-on");
        slidesArr[3].classList.remove("slide-on");
        // slidesArr[4].classList.remove("slide-on");
      }
      
      
      setTimeout(() => { 
        // debugger
        slidesArr[3].classList.add("slide-on");
        slidesArr[3].classList.remove("text-on");
        slidesArr[0].classList.remove("slide-on");
        slidesArr[0].classList.add("text-on");
        prev.classList.add("disabled");
        next.classList.remove("disabled");
        slideCurrent = 0
      }, 2000);
      f1();
      console.log('test')
    }
    
    
  }
}
function abortTimer() {
   // to be called when you want to stop the timer
  clearInterval(tid);
}