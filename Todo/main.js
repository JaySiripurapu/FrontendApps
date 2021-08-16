const addForm=document.querySelector(".add");
const todoList=document.querySelector(".todos");
const search=document.querySelector(".search");

const generateTemplate=todo=>{
    
    const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i></li>`; 
    todoList.innerHTML+=html;
}
//adding new todo
addForm.addEventListener("submit",e=>{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    console.log(todo);
    if(todo.length){
    generateTemplate(todo);
    }
});
//delete todo
todoList.addEventListener("click",e=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
});
//searching todo
const filterTodo=val=>{
    console.log(val);
    Array.from(todoList.children)
    .filter((todo)=> !todo.textContent.includes(val))
        .forEach((todo)=>todo.classList.add("filtered"));
        Array.from(todoList.children)
    .filter((todo)=> todo.textContent.includes(val))
        .forEach((todo)=>todo.classList.remove("filtered"));

};
search.addEventListener("keyup",e=>{
  
  const val=search.search1.value.trim();
  filterTodo(val);
})
