import { ProxyState } from "../AppState.js"



function _draw() {
    let template = ''
    let tasks = ProxyState.tasks
    console.log('something show up');
    tasks.forEach(t => template += t.Template)
    document.getElementById('task-card').innerHTML = template
}






export class TaskController {
    constructor() {
        _draw()
        console.log('show us something');
        createTask() {
            window.event.preventDefault()
            console.log("making sure this works");
            let form = window.event.target
            let newTask = { name = form.name.value }
        }
    }
}
