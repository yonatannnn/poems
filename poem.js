
function saveString(){
    if (typeof localStorage.getItem('string') === 'undefined') {
        localStorage.setItem('string','');
    }
    else {
        let z = localStorage.getItem('string')
        z += `<button class = "title_button" onclick="">${document.querySelector('#title_input').value}</button>`
        localStorage.setItem('string',z)

        console.log('hey')
    }
}

function saveObj(){
    if (!localStorage.getItem('poems')) {
        let poem = {}
        localStorage.setItem('poems',JSON.stringify(poem));
    }
    else {
        let poem = JSON.parse(localStorage.getItem('poems'))
        poem[document.querySelector('#title_input').value] = document.querySelector('#poem_input').value
        localStorage.setItem('poems',JSON.stringify(poem))
        console.log(localStorage.getItem('poems'))
    }
    alert(`${document.querySelector('#title_input').value} is successfully added.`)
}

function print_titles(){
    let string = ''
    var p = JSON.parse(localStorage.getItem('poems'))
    let keys = Object.keys(p)
    keys.forEach((key,index)=>{
        string += `<button class = "title_button" onclick = "${document.querySelector('.real_poem').innerText = JSON.parse(localStorage.getItem('poems'))[key]}">${key}</button>`;
    })
    document.querySelector('#t').innerHTML = string
}

function poem_selector(e){
    console.log(JSON.parse(localStorage.getItem('poems'))[key])
    return document.querySelector('.real_poem').innerText = JSON.parse(localStorage.getItem('poems'))[key]
}

function p(){
    const p = JSON.parse(localStorage.getItem('poems'))
    let keys = Object.keys(p)
    console.log(keys)
    keys.forEach((cell,index) => {
      const cellElement = document.createElement('button')
      cellElement.innerText = cell
      cellElement.classList.add('title_button')
      cellElement.id = cell
        cellElement.addEventListener('click',trying)
        document.querySelector('#t').appendChild(cellElement)
    })
}

function trying(e){
    const po = JSON.parse(localStorage.getItem('poems'))
    document.querySelector('#title_intro').innerText = e.target.id
    document.querySelector('.real_poem').innerText = po[e.target.id]
}

function deletedTitles(){
    document.querySelector('#Dpoems').innerHTML = ""
    const p = JSON.parse(localStorage.getItem('poems'))
    let keys = Object.keys(p)
    keys.forEach((cell,index) => {
        const cellElement = document.createElement('button')
        cellElement.innerText = cell
        cellElement.classList.add('DB')
        cellElement.id = cell
        cellElement.addEventListener('click',deletee)
        document.querySelector('#Dpoems').appendChild(cellElement)
    })
}

function deletee(e){
    const pom = JSON.parse(localStorage.getItem('poems'))
    delete pom[e.target.id]
    localStorage.setItem('poems',JSON.stringify(pom))
    alert(`${e.target.id} is deleted successfully`)
    document.querySelector('#Dpoems').innerHTML = ""
    deletedTitles();
}
window.onload = p;
