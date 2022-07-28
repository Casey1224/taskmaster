import { generateId } from "../Utils/generateId.js";

export class Task {
    constructor(data) {

        this.id = data.id || generateId()
        this.name = data.name,
            this.date = data.date,
            this.items = data.items
    }

    get Template() {
        return `
       <div class="col-4 text-light border shadow m-1 p-0">
          <div class="bg-info text-light">${this.name}</div>
          <div class="text center text-dark">
            <p>${this.items}</p>
            <p>${this.date}</p>
          </div>
          <div class="bg-info text light"> this will be add task bar</div>
        
        `
    }
}