let totalSlides = document.querySelectorAll('.slider--item').length
let currentSlide = 0
let video = document.querySelector('#videoBox')
let tudo = document.querySelector('.tudo')

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`



function goNext(){
    currentSlide++
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0
    }
    updateMargin()
}





function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth
    let newMargin = (currentSlide * sliderItemWidth)
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`
}
setInterval(goNext,10000)

goNext()

function clickVideo(){
    video.style.display = 'block'
    tudo.style.backgroundColor = 'rgba(0, 0, 0, 0.267)'
}