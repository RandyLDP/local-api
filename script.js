const input = document.querySelector('#todo-input')
const list =document.querySelector('#list')
const button = document.querySelector('#button-input')



function addTask(event){
    event.preventDefault();

    const newDiv = document.createElement('div')
    newDiv.classList.add("container");

    const newLI = document.createElement('li');
    newLI.innerText= input.value;
    newLI.classList.add('item')
    newDiv.appendChild(newLI);
 
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '✓';
    newDiv.appendChild(checkButton);
    checkButton.classList.add("check-btn")

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    newDiv.appendChild(deleteButton) ;
    deleteButton.classList.add("delete-btn")

   

    list.appendChild(newDiv);
    input.value="";

}



function deleteCheck(e){
    console.log(e.target)
    const task = e.target;
    if (task.classList[0] === 'delete-btn'){
        const todo = task.parentElement;
        todo.remove();
    }
  
    else if (task.classList[0] === 'check-btn'){
        const todo  = task.parentElement;
        todo.classList.toggle('checked')
    }
}
button.addEventListener('click', addTask);
list.addEventListener('click', deleteCheck);

getTodos()

const data = {description: "buy oatmeal", done: false};
 fetch(apiUrl, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
      "Content-Type": "application/json",
  },
});