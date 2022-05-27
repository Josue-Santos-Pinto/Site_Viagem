let totalSlides = document.querySelectorAll('.slide').length
let currentSlide = 0
let videoarea = document.querySelector('.videoarea')
let video = document.querySelector('.video')
let img = document.querySelector('.img')
let close = document.querySelector('.close')
let form = document.querySelector('.validator')
let menu = document.querySelector('.menu-opener')
let nav = document.querySelector('#menu-open')
let closeMenu = document.querySelector('.closeMenu')

let validator ={
    handleSubmit:(event)=>{
        event.preventDefault()

        let send = true

        let inputs = form.querySelectorAll('input')

        validator.clearErrors()

        for(let i = 0; i < inputs.length; i++){
            let input = inputs[i]
           let check = validator.checkInput(input)

            if(check !== true){
                send = false
                validator.showError(input, check)
            }

        }

        if(send){
            form.submit()
        }

    },
    checkInput:(input)=>{
        let rules = input.getAttribute('data-rules')
        if(rules !== null){
            rules = rules.split('|')
            for(let k in rules){
                let rDetails = rules[k].split('=')

                switch(rDetails[0]){
                    case 'required':

                        if(input.value == ''){
                            return 'Campo não pode ser Vazio'
                        }

                    break

                    case 'min':

                    if(input.value.length < rDetails[1]){
                        return 'Campo deve ter pelom menos '+ rDetails[1] + ' caracteres'
                    }
                    break

                    case 'email':

                    if(input.value != ''){
                        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    
                    if(!regex.test(input.value.toLowerCase())){
                        return 'Campo de e-mail invalido'
                    }
                }
                    break
                
            }
            }
        }
        return true
    },
    showError:(input, error)=>{
        input.style.borderColor= 'red'

        let errorElement = document.createElement('div')
        errorElement.classList.add('error')
        errorElement.innerHTML = error

        input.parentElement.insertBefore(errorElement, input.elementSinbling)
    },
    clearErrors:()=>{
        let inputs = form.querySelectorAll('input')
        for(let i = 0; i < inputs.length; i++){
            inputs[i].style = ''
        }


        let errorElements = document.querySelectorAll('.error')

        for(let i = 0; i < errorElements.length; i++){
            errorElements[i].remove()
        }
    }
}


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
     video.style.marginLeft = 0
     
 })

function closeVideo(){
    if(video.style.display = 'block'){
        video.style.display = 'none'
        videoarea.style.display = 'none'
    } 
    
 }

 form.addEventListener('submit',validator.handleSubmit)


 menu.addEventListener('click',()=>{
     nav.style.display = 'block'
     menu.classList.remove('menu-opener')
     menu.classList.add('closeMenu')  
 })

 closeMenu.addEventListener('click',()=>{
    nav.style.display = 'none'
 })