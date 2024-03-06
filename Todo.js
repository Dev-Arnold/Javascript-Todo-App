
var inp = document.getElementById('inp')
let btn = document.getElementById('add')
let oll = document.getElementById('oll')
var form = document.getElementById('form')

btn.addEventListener('click' , ()=>{
    tasks(inp.value)
    inp.value = ""
})

function tasks(todo) {
    let li = document.createElement('li')
    let closebtn = document.createElement('button');
    let editbtn = document.createElement('button');
    let span = document.createElement('span')
    let holdbtn = document.createElement('div')
    let holdcheck = document.createElement('div')
    let check = document.createElement('input')
    check.type = "checkbox"
    holdbtn.className = "dd"

    closebtn.innerHTML = "&#10060"
    editbtn.innerHTML = "&#9998"
        closebtn.onclick=()=>{
            oll.removeChild(li)
        }
        editbtn.onclick =()=>{
            // inp.value = li.textContent
            // const newtext = prompt('Edit todo' , todo)
            inp.value = todo 
            oll.removeChild(li)
            // li.textContent = newtext
        }
        
    span.innerText = todo
    check.onclick =()=>{
        if (check.checked) {
            span.innerHTML = `<del>${span.innerText}</del>`
        } else {
            span.innerText = todo                   
        }
    }
    holdbtn.appendChild(closebtn)
    holdbtn.appendChild(editbtn)
    holdcheck.appendChild(check)
    holdcheck.appendChild(span)
    li.appendChild(holdcheck)
    li.appendChild(holdbtn)
    oll.appendChild(li)
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
})
