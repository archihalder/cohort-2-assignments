/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = []
  }

  add(task) {
    this.todoList.push(task);
  }

  remove(index) {
    this.todoList.splice(index, 1);
  }

  update(index, updatedTask) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (i === index) {
        this.todoList[i] = updatedTask;
      }
    }
  }

  getAll() {
    return this.todoList;
  }

  get(index) {
    return this.todoList[index] || null;
  }

  clear() {
    this.todoList = [];
  }

}

module.exports = Todo;
