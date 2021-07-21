const input = document.querySelector('#todo-input')
const list =document.querySelector('#list')
const button = document.querySelector('#button-input')

let todos = getTodos()
todos.then((values) => {
    values.forEach(element => {

    const newDiv = document.createElement('div')
    newDiv.classList.add("container");

    const newLI = document.createElement('li');
    newLI.setAttribute("id", element._id);
    newLI.innerText= element.description;
    newLI.classList.add('item')
    newDiv.appendChild(newLI);
 
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '✓';
    newDiv.appendChild(checkButton);
    checkButton.classList.add("check-btn")

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute("id", element._id)
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    newDiv.appendChild(deleteButton) ;
    deleteButton.classList.add("delete-btn")

   

    list.appendChild(newDiv);
    input.value="";
    })

})

const addTodo = async function() {
    
        const todoValue = input.value;
        const newTodo = {description: todoValue , done: false};
        console.log(newTodo);
        await postTodo(newTodo);
}  

function deleteCheck(e){
    console.log(e.target)
    const task = e.target;
    if (task.classList[0] === 'delete-btn'){
        const todo = task.parentElement;
        todo.remove();
        deleteTodo(task.id)
    }
  
    else if (task.classList[0] === 'check-btn'){
        const todo  = task.parentElement;
        todo.classList.toggle('checked')
    }
}
// input.addEventListener('change', addTodo);
button.addEventListener('click', addTodo);
list.addEventListener('click', deleteCheck);


// const data = {description: "buy oatmeal", done: false};
//  fetch(apiUrl, {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//       "Content-Type": "application/json",
//   },
// });