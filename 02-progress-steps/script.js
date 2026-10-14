const progress = document.getElementById('progress')

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// Estado: en qué paso estamos (empieza en el 1)
let currentActive = 1

// Next: avanza un paso, sin pasarse del último
next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  update()
})

// Prev: retrocede un paso, sin bajar del primero
prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

// Pinta la página según el estado actual
const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('circle-active')
    } else {
      circle.classList.remove('circle-active')
    } 
  })

  const actives = document.querySelectorAll('.circle-active')
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  // Botones: deshabilitar el que no aplica en cada extremo
  prev.disabled = currentActive === 1
  next.disabled = currentActive === circles.length  
}
