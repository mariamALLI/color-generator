const colorForm = document.getElementById("color_form")
const colorBtn = document.getElementById('color_btn')
const colorDisplayContainer = document.getElementById('color_display_container')

const colorTxtOne = document.getElementById('color-txt-one')
const colorTxtTwo = document.getElementById('color-txt-two')
const colorTxtThree = document.getElementById('color-txt-three')
const colorTxtFour = document.getElementById('color-txt-four')
const colorTxtFive = document.getElementById('color-txt-five')
const colorTxtSix = document.getElementById('color-txt-six')


/*input value for color*/ 
const colorPicker = document.querySelector('#color_picker')
let getColorValue = colorPicker.value

/*select value for mode*/ 
const colorMode = document.querySelector('#color_mode')
let getColorSelection = colorMode.value

/*empty array created for the hex value*/ 
let colorArr = []

colorPicker.addEventListener('change', (event)=>{
    getColorValue = event.target.value 
})

colorMode.addEventListener('change', (event)=>{
    getColorSelection = event.target.value
})


let getColorScheme = ()=>{

    const url = `https://www.thecolorapi.com/scheme?hex=${getColorValue.replace('#','')}&mode=${getColorSelection}&format=json&count=6`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        renderColorHtml(data)
        console.log(data)}
    )}

function renderColorHtml(data){
    data.colors.forEach(color => colorArr.unshift(color.hex.value))

    for(let i= 0; i < colorArr.length; i++){
        colorTxtOne.textContent = colorArr[0]
        colorTxtTwo.textContent = colorArr[1]
        colorTxtThree.textContent = colorArr[2]
        colorTxtFour.textContent = colorArr[3]
        colorTxtFive.textContent = colorArr[4]
        colorTxtSix.textContent = colorArr[5]
    }
        let colorHtml = colorArr.map((color)=>{
        return `
        <div class="color_box">
             <div id="color-box" class="color-box" style="background-color:${color}"></div>
        </div>
        `     
            }).join('')
            colorDisplayContainer.innerHTML = colorHtml
            colorArr = []      
}
getColorScheme()

colorForm.addEventListener('submit', (e)=>{
    e.preventDefault()
   getColorScheme()
})


function colorTxtCopyOne(){
   console.log('click')
   const cb = navigator.clipboard;
   const paragraph = colorTxtOne
   cb.writeText(paragraph.innerText).then(()=> document.getElementById('colr-txt-copy-one').textContent='copied',
   setTimeout(()=>{
    document.getElementById('colr-txt-copy-one').textContent='click me'
   },2000)
   )
}

function colorTxtCopyTwo(){
    console.log('click')
    const cb = navigator.clipboard;
    const paragraph = colorTxtTwo
    cb.writeText(paragraph.innerText).then(()=> document.getElementById('colr-txt-copy-two').textContent='copied',
    setTimeout(()=>{
     document.getElementById('colr-txt-copy-two').textContent='click me'
    },2000)
    )
     
 }

function colorTxtCopyThree(){
    console.log('click')
    const cb = navigator.clipboard;
    const paragraph = colorTxtThree
    cb.writeText(paragraph.innerText).then(()=> document.getElementById('colr-txt-copy-three').textContent='copied',
    setTimeout(()=>{
     document.getElementById('colr-txt-copy-three').textContent='click me'
    },2000)
    )
     
 }

function colorTxtCopyFour(){
    console.log('click')
    const cb = navigator.clipboard;
    const paragraph = colorTxtFour
    cb.writeText(paragraph.innerText).then(()=> document.getElementById('colr-txt-copy-four').textContent='copied',
    setTimeout(()=>{
     document.getElementById('colr-txt-copy-four').textContent='click me'
    },2000)
    )
     
 }

function colorTxtCopyFive(){
    console.log('click')
    const cb = navigator.clipboard;
    const paragraph = colorTxtFive
    cb.writeText(paragraph.innerText).then(()=> document.getElementById('colr-txt-copy-five').textContent='copied',
    setTimeout(()=>{
     document.getElementById('colr-txt-copy-five').textContent='click me'
    },2000)
    )
     
 }

function colorTxtCopySix(){
    console.log('click')
    const cb = navigator.clipboard;
    const paragraph = colorTxtSix
    cb.writeText(paragraph.innerText).then(()=> document.getElementById('colr-txt-copy-six').textContent='copied',
    setTimeout(()=>{
     document.getElementById('colr-txt-copy-six').textContent='click me'
    },2000)
    )
     
 }
