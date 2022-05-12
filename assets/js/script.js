let totalSlides = document.querySelectorAll('.slide').length
let currentSlide = 0
let videoarea = document.querySelector('.videoarea')
let video = document.querySelector('.video')
let img = document.querySelector('.img')
let close = document.querySelector('.close')
let moreBtn = document.querySelector('#morePlans')
let lessBtn = document.querySelector('#lessPlans')
let moreClass = document.querySelector('.more')
let moreArea = document.querySelector('.boxmore')
let photoinfo = document.querySelectorAll('.more.section-plan--photo')



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
     videoarea.style.display = 'flex'
     
 })

function closeVideo(){
    if(video.style.display = 'block'){
        video.style.display = 'none'
        videoarea.style.display = 'none'
    } 
    
 }

 moreBtn.addEventListener("click",()=>{
    
    let aumMore = setTimeout(openMore,500)

     moreArea.style.height = `0px`
     moreClass.style.display = 'flex'
     moreBtn.style.display = 'none'
     
     function openMore(){
        moreClass.style.height = '665px'
     }


 })

 lessBtn.addEventListener("click",()=>{
    moreBtn.style.display = 'inline-block'
    moreClass.style.display = 'none'
    lessBtn = ''
    lessBtn.style.display = 'none'
    
    
})

 