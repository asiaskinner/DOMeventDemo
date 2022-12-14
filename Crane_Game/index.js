const crane = document.querySelector('.crane-img')
const up = document.querySelector('.up')
const down = document.querySelector('.down')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

right.addEventListener('click', function () {
  crane.style.marginLeft = '100px'
})

left.addEventListener('click', function () {
  crane.style.marginLeft = '0px'
})

down.addEventListener('click', function () {
  crane.style.marginTop = '100px'
})

up.addEventListener('click', function () {
  crane.style.marginTop = '0px'
})
