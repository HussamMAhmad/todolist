/*
    Student Tasks
    [1] use sweet alert if input is empty
    [2] check if tasks exist
    [3] Create Delete All Tasks Button 
    [4] Create Finish All tasks button 
    [5] add tasks to the localstorage
*/

// setting up the var

let input = document.querySelector(".add-task input");
let add = document.querySelector(".add-task .plus");
let taskContainer = document.querySelector(".tasks-content");
let taskCount = document.querySelector(".task-stats .tasks-count span");
let taskCompleted = document.querySelector(".tasks-completed span");
let alertM = document.querySelector(".alertM");
let check = document.querySelector(".check-value"); 
let closeB = document.querySelectorAll(".close");
let delB = document.querySelector('.all .del'); 
let finishB = document.querySelector(".all .finish");

window.onload = function () {
    input.focus();
};

add.onclick = function () {
    if (input.value === '') {
        alertM.style.display = "block"; 
    } else {
        if(document.body.contains(document.querySelector(".task-box"))){
            let task = document.querySelectorAll(".task-box"); 
    
            for(let i = 0 ; i < task.length ; i++){
                if(input.value == task[i].childNodes[0].textContent.trim()){
                    check.style.display = "block" ; 
                    return ; 
                }
            }
        }
        let noMsg = document.querySelector(".tasks-content .no-tasks-message");

        if (document.body.contains(document.querySelector(".tasks-content .no-tasks-message"))) {
            noMsg.remove();
        }

        let span = document.createElement("span");
        let del = document.createElement("span");

        span.classList.add('task-box');
        del.classList.add('delete');

        span.appendChild(document.createTextNode(input.value));
        del.appendChild(document.createTextNode("Delete"));

        span.appendChild(del);
        taskContainer.appendChild(span);
        // add value task to local storage
        addTasks(); 
        input.value = "";
        input.focus();
        calculateTask(); 
    }
};

document.addEventListener("click", function (e) {
    if (e.target.className == "delete") {
        e.target.parentNode.remove();

        if (taskContainer.childElementCount == 0) {
            createNoTask();
        }
    };
    if (e.target.classList.contains("task-box")) {
        e.target.classList.toggle("finished");
    }
    calculateTask(); 
});

// function to create no tasks message 
function createNoTask() {
    let span = document.createElement("span");
    let text = document.createTextNode("No Tasks to show");
    span.className = "no-tasks-message";
    span.appendChild(text);
    taskContainer.appendChild(span);
};

// function to calculate tasks
function calculateTask() {
    taskCount.innerHTML = document.querySelectorAll(".task-box").length;

    taskCompleted.innerHTML = document.querySelectorAll(".finished").length;
};

closeB[0].onclick = function(){
        alertM.style.display = 'none' ; 
};
closeB[1].onclick = function(){
    check.style.display = 'none' ; 
};

function checkTask(){
    if(document.body.contains(document.querySelector(".task-box"))){
        let task = document.querySelectorAll(".task-box"); 

        for(let i = 0 ; i < task.length ; i++){
            console.log(input.value);
            console.log(task[i].childNodes[0].textContent.trim());
            if(input.value == task[i].childNodes[0].textContent.trim()){
                return ; 
            }
        }
    }
}

// delete all 
delB.onclick = function(){
    if(document.body.contains(document.querySelector(".task-box"))){
        let allTasks = document.querySelectorAll('.task-box');
        for(let i = 0 ; i < allTasks.length ; i++){
            allTasks[i].remove(); 
        }
    }
};

// finish all 
finishB.onclick = function(){
    if(document.body.contains(document.querySelector(".task-box"))){
        let allTasks = document.querySelectorAll('.task-box');
        for(let i = 0 ; i < allTasks.length ; i++){
            allTasks[i].classList.add('finished');   
        }
    }
}

// add tasks to local storage 
function addTasks(){
    let tasks = document.querySelectorAll('.task-box'); 
    let p = [] ; 
    for(let i = 0 ; i < tasks.length ; i++){
        p[i] = tasks[i].childNodes[0].textContent; 
    }
    console.log(p) ; 
    window.localStorage.setItem('tasks' , p); 
}; 
