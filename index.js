const rateBtn = document.querySelectorAll('.rate-btn')
const submit = document.querySelector('.submit')
const rate = document.querySelector('.orangetext')
const article = document.querySelector('.thank-you')
const main = document.querySelector('.main')
const again = document.querySelector('.rate')

submit.addEventListener('click', () => {
    article.classList.remove('hidden')
    main.classList.add('hidden')
})

again.addEventListener('click', ()=>{
    main.classList.remove('hidden')
    article.classList.add('hidden')
})

rateBtn.forEach((btn) => {
    btn.addEventListener('click', ()=> {
    rate.innerText = btn.textContent;
    })
})