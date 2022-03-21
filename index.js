let counter = 1
let $slider = document.getElementsByClassName('slider')[0]
console.log($slider)

// function consoleLog() {
//   console.log('clicked')
// }

const intervalo = setInterval(() => {
  document.getElementById('radio' + counter).checked = true
  counter++
  if (counter > 4) {
    counter = 1
  }
}, 4000)

$slider.addEventListener('mouseenter', () => {
  clearInterval(intervalo)
})

// $slider.addEventListener('mouseleave', () => {
//   const intervalo = setInterval(() => {
//     document.getElementById('radio' + counter).checked = true
//     counter++
//     if (counter > 4) {
//       counter = 1
//     }
//   }, 2000)
// })

// $slider.addEventListener('mouseenter', (e) => {
//   $slider.style.border = '5px dotted orange'
// })
// $slider.addEventListener('mouseleave', (e) => {
//   $slider.style.border = '5px solid red'
// })
