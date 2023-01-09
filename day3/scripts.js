const close = document.getElementById('close')
const open = document.getElementById('open')
const container = document.querySelector('.container')

open.addEventListener('click',()=>
    // console.log('text')
    container.classList.add('show-nav')
)

close.addEventListener('click',()=>
    // console.log('text')
    container.classList.remove('show-nav')
)

