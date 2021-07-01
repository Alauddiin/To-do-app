// all selector
let form = document.querySelector('#form')
let newTask = document.querySelector('#new-task')
let addTask = document.querySelector('#submit-task')
let incompleteItems = document.querySelector('#incomplete-item')
let completeItems = document.querySelector('#complete-item')



// add event listener
addTask.addEventListener('click',addTasks)
incompleteItems.addEventListener('click',completed)




// add items in the incompeted list
function addTasks(e){

if(newTask.value===''){

    alert("Please add a task.")
}else{

    let listItem = document.createElement('li')
    let checkBox = document.createElement('input')
    let label = document.createElement('label')
    checkBox.type='checkbox'
    checkBox.className='checkbox'
    label.innerHTML=newTask.value
    listItem.appendChild(checkBox)
    listItem.appendChild(label)
    incompleteItems.appendChild(listItem)
    newTask.value='';

}
    e.preventDefault();
}







// transfer incompleteItems to completeItems
incompleteItems.addEventListener('click',completed)

function completed(e){
    if(e.target.hasAttribute('type')){

      let  removeElement = e.target.parentElement
      removeElement.remove();
      let completeListText = removeElement.innerText
      let listItem = document.createElement('li')
      let label = document.createElement('label')
      label.className="label"
      let deleteBtn = document.createElement('button')
      deleteBtn.innerHTML="Delete"
      label.innerText=completeListText
      listItem.appendChild(label)
      listItem.appendChild(deleteBtn)
      completeItems.appendChild(listItem)
      deleteBtn.className="delete-btn" 
      deleteBtn.setAttribute('href','#') 


    }
    e.preventDefault();
}






// remove items from completed item
completeItems.addEventListener('click',removeCompletedTask)

function removeCompletedTask(e){
    if(e.target.hasAttribute('href')){
    let removeCompleted = e.target.parentElement
    removeCompleted.remove();
    console.log(e);
    }


   
    
}