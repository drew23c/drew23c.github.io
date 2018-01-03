document.addEventListener('DOMContentLoaded', ()=>{
    let inpLet = document.querySelector('#id-simple-speak')
    let inpNum = document.querySelector('#inputNum')
    let alpha = document.querySelector('#alpha')
    let bLet = document.querySelector('#bLet')
    let bNum = document.querySelector('#bNum')    
    let letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let number = Math.floor(Math.random() * 100)
    let randLet = letter[Math.floor(Math.random() * 52)]
    let happyLet = document.getElementById('happyLet')
    let sadLet = document.getElementById('sadLet')
    let happyNum = document.getElementById('happyNum')
    let sadNum = document.getElementById('sadNum')
    // let num = document.getElementById('num').value

    inpLet.innerText = randLet
    bLet.addEventListener('click',()=>{
        if(randLet === alpha.value){
            happyLet.classList.remove('hide')
            setTimeout(()=>{
                location.reload()                
            },3000)
        }else if(randLet !== alpha.value){
            sadLet.classList.remove('hide')
            setTimeout(()=>{
                location.reload()                
            },3000)
        }    
    })
    // inpNum.innerText = parseInt(number)
    // bNum.addEventListener('click',()=>{
    //     if(number === parseInt(num)){
    //         happyNum.classList.remove('hide')
    //         setTimeout(()=>{
    //             location.reload()                
    //         },3000)
    //     }else if(number !== parseInt(num)){
    //         sadNum.classList.remove('hide')
    //         setTimeout(()=>{
    //             location.reload()                
    //         },3000)
    //     }    
    // })

})