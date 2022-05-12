let totalSlides = document.querySelectorAll('.slide').length
let currentSlide = 0
let video = document.querySelector('.video')
let img = document.querySelector('.img')
let close = document.querySelector('.close')
let moreBtn = document.querySelector('#morePlans')
let lessBtn = document.querySelector('#lessPlans')
let moreClass = document.querySelector('.more')



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
     video.style.display = 'block'
     //body.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
     
 })

function closeVideo(){
    if(video.style.display = 'block'){
        video.style.display = 'none'
    } 
    
 }

 moreBtn.addEventListener("click",()=>{
     moreClass.style.display = 'flex'
     moreClass.style.opacity = '1'
     moreBtn.style.display = 'none'
 })

 lessBtn.addEventListener("click",()=>{
    moreBtn.style.display = 'inline-block'
    moreClass.style.display = 'none'
    moreClass.style.opacity = '0.2'
    lessBtn = ''
    lessBtn.style.display = 'none'
    
    
})

 