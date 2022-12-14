const loremParagraph = document.querySelector('.text')
const biggerButton = document.querySelector('.bigger')
const smallerButton = document.querySelector('.smaller')

const biggerButtonStyle = {
  fontSize: '20px',
}

function applyStyles(element, style) {
  for (const property in style) {
    element.style[property] = style[property]
  }
}

biggerButton.addEventListener('click', function () {
  applyStyles(loremParagraph, biggerButtonStyle)
})

const smallerButtonStyle = {
  fontSize: '10px',
}

smallerButton.addEventListener('click', function () {
  applyStyles(loremParagraph, smallerButtonStyle)
})
