let storedTodo = localStorage.getItem('todo');
let todo = storedTodo? JSON.parse(storedTodo) :[];

displayItems();

function addTodo(){
    const inputElement = document.querySelector('#todo-input');
    const dateElement = document.querySelector('#todo-date');
    const todoItem = inputElement.value;
    const  dueDate = dateElement.value;
    
    if(!todoItem){
        alert('Please enter a todo');
        return;
    }else if(!dueDate){
        alert('Please enter a date');
        return;
    }

    todo.push({item: todoItem , dueDate: dueDate});
    inputElement.value = '';
    dateElement.value = '';
    storeTodo();
    displayItems();
}

function displayItems(){
     const  container = document.querySelector('.todo-container');
     let newHtml = '';
     for(let i =0 ; i < todo.length ; i++){
      const { item, dueDate } = todo[i];
      newHtml += `
      <div class="grid-container">
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="btn-delete" arai-label = "Delete ${item}" onclick="deletetodo(${i})">Delete</button>
      </div>
      `;
     }
  container.innerHTML = newHtml;
}

 function deletetodo(index){
    todo.splice(index , 1);
    storeTodo();
    displayItems();

 }
function clearTodo(){
    if(confirm('Are you sure you want to clear the todo list ?')){
    todo =[];
    localStorage.removeItem('todo');
    displayItems();
    }
}

 function storeTodo(){
    localStorage.setItem('todo', JSON.stringify(todo));
}
document.querySelector('#clear-todo').addEventListener('click', clearTodo);