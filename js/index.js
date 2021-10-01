const header = document.querySelector('#header')
const title = document.querySelector('#title')
const excerpt = document.querySelector('#excerpt')
const profile_img = document.querySelector('#profile_img')
const name = document.querySelector('#name')
const date = document.querySelector('#date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)

function getData(){
    header.innerHTML = '<img src="./img/dog.jpg" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor nulla modi eos doloremq'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, commodi!'
    profile_img.innerHTML = '<img src="./img/img3.jpg" alt="" />'
    name.innerHTML = 'Anvar Turdaliev'
    date.innerHTML = 'Oct 08, 2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}