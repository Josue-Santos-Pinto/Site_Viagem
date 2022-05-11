let totalSlides = document.querySelectorAll('.slide').length
let currentSlide = 0
let video = document.querySelector('#videoBox')


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

function clickVideo(){
    video.style.display = 'block'
    tudo.style.backgroundColor = 'rgba(0, 0, 0, 0.267)'
}