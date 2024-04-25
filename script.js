const redLight = document.getElementById('red')
const yellowLight = document.getElementById('yellow')
const greenLight = document.getElementById('green')

function ColorLight() {
    setTimeout(() => {
        redLight.style.backgroundColor = 'red'
        yellowLight.style.backgroundColor = '#242424'
        greenLight.style.backgroundColor = '#242424'
    }, 0)

    setTimeout(() => {
        redLight.style.backgroundColor = '#242424'
        yellowLight.style.backgroundColor = 'yellow'
        greenLight.style.backgroundColor = '#242424'
    }, 4000)

    setTimeout(() => {
        redLight.style.backgroundColor = '#242424'
        yellowLight.style.backgroundColor = '#242424'
        greenLight.style.backgroundColor = 'green'
    }, 5000)
    setTimeout(() => {
        redLight.style.backgroundColor = '#242424'
        yellowLight.style.backgroundColor = '#242424'
        greenLight.style.backgroundColor = '#242424'
    }, 8000)
    setTimeout(() => {
        redLight.style.backgroundColor = '#242424'
        yellowLight.style.backgroundColor = '#242424'
        greenLight.style.backgroundColor = 'green'
    }, 9000)
    setTimeout(() => {
        redLight.style.backgroundColor = '#242424'
        yellowLight.style.backgroundColor = '#242424'
        greenLight.style.backgroundColor = '#242424'
    }, 10000)
    setTimeout(() => {
        redLight.style.backgroundColor = '#242424'
        yellowLight.style.backgroundColor = '#242424'
        greenLight.style.backgroundColor = 'green'
    }, 11000)
    setTimeout(() => {
        redLight.style.backgroundColor = '#242424'
        yellowLight.style.backgroundColor = '#242424'
        greenLight.style.backgroundColor = '#242424'
    }, 12000)
    setTimeout(() => {
        redLight.style.backgroundColor = '#242424'
        yellowLight.style.backgroundColor = '#242424'
        greenLight.style.backgroundColor = 'green'
    }, 13000)
    setTimeout(() => {
        redLight.style.backgroundColor = '#242424'
        yellowLight.style.backgroundColor = 'yellow'
        greenLight.style.backgroundColor = '#242424'
    }, 14000)

    setTimeout(() => {
        ColorLight()
    }, 15000)

}

ColorLight()
