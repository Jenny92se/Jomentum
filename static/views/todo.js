//https://unsplash.com/ image

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = []; // array

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function something(todo) {
    //console.log(todo.text);
    paintToDo(todo.text);
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (todo) {
        return todo.id != parseInt(li.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
    //console.log(event.target.parentNode);

}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos != null) {
        const parsedToDos = JSON.parse(loadedToDos);
        //console.log(parsedToDos);
        //todo is an object of toDos => toDoObj
        /*  parsedToDos.forEach(function (todo) {
              //console.log(todo.text);
              paintToDo(todo.text);
          });*/
        parsedToDos.forEach(something);
    }

}

function paintToDo(text) {
    //console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();

}

function handleSubmit(evnet) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();