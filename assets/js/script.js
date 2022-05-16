let totalSlides = document.querySelectorAll('.slide').length
let currentSlide = 0
let videoarea = document.querySelector('.videoarea')
let video = document.querySelector('.video')
let img = document.querySelector('.img')
let close = document.querySelector('.close')




document.querySelector('.sliders').style.width = `calc(100vw * ${totalSlides})`



function goNext(){
    currentSlide++
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0
    }
    updateMargin()
}





function updateMargin(){
    let sliderItemWidth = document.querySelector('.slide').clientWidth
    let newMargin = (currentSlide * sliderItemWidth)
    document.querySelector('.slide').style.marginLeft = `-${newMargin}px`
}
setInterval(goNext,10000)

goNext()

 img.addEventListener("click",()=>{
     video.style.display = 'flex'
     videoarea.style.display = 'flex'
     
 })

function closeVideo(){
    if(video.style.display = 'block'){
        video.style.display = 'none'
        videoarea.style.display = 'none'
    } 
    
 }

