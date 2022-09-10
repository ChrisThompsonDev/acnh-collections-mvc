// *************** Mark Items as complete or incomplete ************

const taskItems = document.querySelectorAll('div') // Select all div items

Array.from(taskItems).forEach((el)=>{
  el.addEventListener('click', ChangeDivStatus) // Add click event to all divs
})

async function ChangeDivStatus(){
  if (this.getAttribute('class') === 'false'){ // If the div is not already highlighted, change its class to true
    this.setAttribute("class", "true")
    const userId = document.querySelector('h3[data-user-id]').dataset.userId // grab logged in user ID from h3
    const divId = this.id // grab the div ID
    try {
      await fetch('todos/addDivId', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          userId: userId,
          divId: divId
        }) // Send the div ID and User ID to the controller
      })
    } catch(err) {
      console.log(err)
    }
  } else if (this.getAttribute('class') === 'true') { // If the div is already highlighted, change its class to false
    this.setAttribute("class", "false")
    const userId = document.querySelector('h3[data-user-id]').dataset.userId // grab logged in user ID from h3
    const divId = this.id // grab the div ID
    try {
      await fetch('todos/removeDivId', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          userId: userId,
          divId: divId
        }) // Send the div ID and User ID to the controller
      })
    } catch(err) {
      console.log(err)
    }
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

// *************** Tracking bar ************
// Global variable for each tracking bar
// For loop counting number of DIVs for each category
// Change span ID to global variable
// Add or subtract from global variable with each click
/* function progressBar(categoryId, categoryMax, categoryClass) {
  for(let i = 0; i <= categoryMax; i++) {
    
  }
} */



// *************** Clear Tasks Button ************
// All task divs classes are marked as false
// All task divs are removed from database
const clearButton = document.getElementById('clearTasks')

clearButton.addEventListener('click', clearTasks) // Add click event to clear button

async function clearTasks(){
  for (let i = 1; i <= 12; i++) {
    document.getElementById(`taskdiv${i}`).setAttribute("class", "false") // change all taskDivs to class "false"
    const userId = document.querySelector('h3[data-user-id]').dataset.userId // grab logged in user ID from h3
    const divId = `taskdiv${i}` // grab the div ID
    try {
      await fetch('todos/removeDivId', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          userId: userId,
          divId: divId
        }) // Send the div ID and User ID to the controller
      })
    } catch(err) {
      console.log(err)
    }
    }
}