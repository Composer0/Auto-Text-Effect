const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++

    if(idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
    // withut the if, the statement stops once it reaches the end.
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)
// this is only possible due to the values initiated on the input property in the html file. Study that.