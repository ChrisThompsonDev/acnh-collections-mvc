// *************** Mark Items as complete or incomplete ************

const taskItems = document.querySelectorAll('div') // Select all div items

Array.from(taskItems).forEach((el)=>{
  el.addEventListener('click', ChangeDivStatus) // Add click event to all divs
})

async function ChangeDivStatus(){
  if (this.getAttribute('class') === 'false'){ // If the div is not already highlighted, change its class to true
    this.setAttribute("class", "true")
    updateCompletedItems()
    const userId = document.querySelector('h3[data-user-id]').dataset.userId // grab logged in user ID from h3
    const divId = this.id // grab the div ID
    try {
      await fetch('tracker/addDivId', {
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
    updateCompletedItems()
    const userId = document.querySelector('h3[data-user-id]').dataset.userId // grab logged in user ID from h3
    const divId = this.id // grab the div ID
    try {
      await fetch('tracker/removeDivId', {
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
// Add or subtract from global variable with each click

// Create array of all divs with the class of "true"
let completedItems = document.querySelectorAll('.true')
// Count number of completed items with id that contains 'tas'
let taskTracker = countCompletedItems('tas')
// Count number of completed items with id that contains 'mus'
let musicTracker = countCompletedItems('mus')
// Count number of completed items with id that contains 'gyr'
let gyroidTracker = countCompletedItems('gyr')
// Count number of completed items with id that contains 'fos'
let fossilTracker = countCompletedItems('fos')
// Count number of completed items with id that contains 'art'
let artTracker = countCompletedItems('art')
// Count number of completed items with id that contains 'umb'
let umbrellaTracker = countCompletedItems('umb')

//function to count the completed items in each category
function countCompletedItems(category) {
  return [...completedItems].map(element => element.id.toString().substring(0, 3)).filter(element => element === category).length
}

// Function to add item count to progress bar
function updateProgressBars(progressid, numberid, counter) {
  document.querySelector(progressid).setAttribute('value', counter)
  document.querySelector(numberid).innerText = counter.toString()
}

// Function to update the counted items
function updateCompletedItems() {
  completedItems = document.querySelectorAll('.true')
  taskTracker = countCompletedItems('tas')
  musicTracker = countCompletedItems('mus')
  gyroidTracker = countCompletedItems('gyr')
  fossilTracker = countCompletedItems('fos')
  artTracker = countCompletedItems('art')
  umbrellaTracker = countCompletedItems('umb')
  updateProgressBars('#taskProgress', '#taskPercent', taskTracker)
  console.log(`${taskTracker} Tasks Completed!`)
  updateProgressBars('#musicProgress', '#musicPercent',musicTracker)
  console.log(`${musicTracker} Songs Collected!`)
  updateProgressBars('#gyroidProgress', '#gyroidPercent',gyroidTracker)
  console.log(`${gyroidTracker} Gyroids Collected!`)
  updateProgressBars('#fossilProgress', '#fossilPercent',fossilTracker)
  console.log(`${fossilTracker} Fossils Collected!`)
  updateProgressBars('#artProgress', '#artPercent',artTracker)
  console.log(`${artTracker} Art Collected!`)
  updateProgressBars('#umbrellaProgress', '#umbrellaPercent',umbrellaTracker)
  console.log(`${umbrellaTracker} Umbrellas Collected!`)
}
updateCompletedItems()

// If progress bar is full, change color to green
/* function completedProgress() {
  if (taskTracker === 12) {

  }
}
completedProgress() */


// *************** Clear Tasks Button ************
// All task divs classes are marked as false
// All task divs are removed from database
const clearButton = document.getElementById('clearTasks')

clearButton.addEventListener('click', clearTasks) // Add click event to clear button

async function clearTasks(){
    // change all taskDivs to class "false"
    document.getElementById('taskCheckIn').setAttribute("class", "false")
    document.getElementById('taskVisitNooksCranny').setAttribute("class", "false")
    document.getElementById('taskVisitAbelSisters').setAttribute("class", "false")
    document.getElementById('taskVisitBrewster').setAttribute("class", "false")
    document.getElementById('taskMoneyTree').setAttribute("class", "false")
    document.getElementById('taskFindMoneyRock').setAttribute("class", "false")
    document.getElementById('taskFindFossils').setAttribute("class", "false")
    document.getElementById('taskMessageBottles').setAttribute("class", "false")
    document.getElementById('taskTalkToVisitors').setAttribute("class", "false")
    document.getElementById('taskTalkToNeighbors').setAttribute("class", "false")
    document.getElementById('taskVisitHarvsIsland').setAttribute("class", "false")
    document.getElementById('taskHaveFun').setAttribute("class", "false")
    //Clear Task Progress Bar
    updateCompletedItems()
    const userId = document.querySelector('h3[data-user-id]').dataset.userId // grab logged in user ID from h3
    try {
      await fetch('tracker/removeDivId', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          userId: userId,
          divId: ['taskCheckIn', 'taskVisitNooksCranny', 'taskVisitAbelSisters', 'taskVisitBrewster', 'taskMoneyTree', 'taskFindMoneyRock', 'taskFindFossils', 'taskMessageBottles', 'taskTalkToVisitors', 'taskTalkToNeighbors', 'taskVisitHarvsIsland', 'taskHaveFun']
        }) // Send the div ID and User ID to the controller
      })
    } catch(err) {
        console.log(err)
    }
}