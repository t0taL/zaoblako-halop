import { Injectable } from '@angular/core';

import { ITodo } from '../../models/todo.model';


@Injectable()
export class TodoLocalStorageService {
  private readonly storageKey: string = 'todos';

  constructor() {
  }

  find(): ITodo[] {
    const todos: ITodo[] = JSON.parse(localStorage.getItem(this.storageKey));

    if (!todos) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }

    return todos || [];
  }

  findById(id: string): ITodo {
    const todos: ITodo[] = this.find();
    const targetTodo: ITodo = todos.find((todo: ITodo) => todo.id === id);
    return targetTodo || null;
  }

  create(todo: ITodo): ITodo[] {
    const todos: ITodo[] = this.find();
    todos.push(todo);
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
    return todos;
  }

  update(todo: ITodo): ITodo[] {
    const todos: ITodo[] = this.find().map(i => (i.id === todo.id) ? todo : i);
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
    return todos;
  }

  remove(todoId: string): ITodo[] {
    const todos: ITodo[] = this.find().filter(i => i.id !== todoId);
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
    return todos;
  }
}
