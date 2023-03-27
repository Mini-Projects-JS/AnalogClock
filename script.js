const hourHand = document.querySelector('.hour')
const minHand = document.querySelector('.minute')
const secHand = document.querySelector('.second')

const dateDiv = document.querySelector('.date')
const timeDiv = document.querySelector('.time')

const updateTime = () => {
    const currTime = new Date()

    const hours = currTime.getHours()
    const minutes = currTime.getMinutes()
    const seconds = currTime.getSeconds()

    const hourAngle = (hours % 12) * 30 + minutes * 0.5

    hourHand.style.transform = `rotate(${hourAngle}deg)`
    minHand.style.transform = `rotate(${minutes * 6}deg)`
    secHand.style.transform = `rotate(${seconds * 6}deg)`

    const date = currTime.getDate()
    const month = currTime.getMonth() + 1
    const year = currTime.getFullYear()

    let zero = (seconds < 10)? '0' : ''

    dateDiv.innerText = `${date}/${month}/${year}`
    timeDiv.textContent = `${hours}:${minutes}:${zero}${seconds}`
}

setInterval(() => {
    updateTime()
}, 500)