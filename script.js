const input = document.querySelector('.todo-input')
const list =document.querySelector('#list')
const button = document.querySelector('#button-input')



function addTask(event){
    event.preventDefault();
    console.log('working!')

    const newDiv = document.createElement('div')

    const newLI = document.createElement('li');
    newLI.innerText= input.value;
    newDiv.appendChild(newLI);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    newDiv.appendChild(deleteButton) ;
    checkButton.classList.add("delete-btn")

    const checkButton = document.createElement('button');
    checkButton.innerHTLM = '<i class = "fas fa-check"></i>';
    newDiv.appendChild(checkButton);
    checkButton.classList.add("check-btn")

    list.appendChild(newDiv);
    input.value="";

}

button.addEventListener('click', aadTask);
list.addEventListener('click', deleteCheck);

function deleteCheck(e){
    console.log(e.target)
    const task = e.target;
    if (task.classList[0] === 'delete-btn'){
        let task = task.parentElement;
    }
  
    if (task.classList[0] === 'check-btn'){
        let task = task.parentElement;
        task.classList.toggle('checked'  )
    }
}

