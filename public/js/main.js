const todoItem = document.querySelectorAll('div.false')
const todoComplete = document.querySelectorAll('div.true')


Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', addDivId)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', removeDivId)
})

async function addDivId(){
  const userId = document.querySelector('h2[data-user-id]').dataset.userId
  const divId = this.id
  try {
    await fetch('todos/addDivId', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        userId: userId,
        divId: divId
      })
    })
    location.reload()
  } catch(err) {
    console.log(err)
  }
}

async function removeDivId(){
  const userId = document.querySelector('h2[data-user-id]').dataset.userId
  const divId = this.id
  try {
    await fetch('todos/removeDivId', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        userId: userId,
        divId: divId
      })
    })
    location.reload()
  } catch(err) {
    console.log(err)
  }
}

// *************** Store Last Tab so preserve tab selection on fage reload ************

let radios = document.querySelectorAll('input')
Array.from(radios).forEach((element) => {
  element.addEventListener('click', storeTab)
}) // Add click event to radio buttons

function storeTab(){
  console.log(this.id)
  localStorage.setItem('lastTab', this.id);
} //Store selected radio button in localStorage

var val = localStorage.getItem('lastTab');
console.log(`Last Tab Selected = ${val}`) // local storage value

for(var i=0;i<radios.length;i++){
  if(radios[i].id === val){
    console.log(val)
    document.getElementById(`tasksTab`).removeAttribute('checked')
    document.getElementById(`${val}`).setAttribute('checked','checked'); // marking the required radio as checked
  }
}