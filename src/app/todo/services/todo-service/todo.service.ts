import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { TodoLocalStorageService } from '../todo-local-storage-service/todo-local-storage.service';

import { ITodo, Todo } from '../../models/todo.model';


@Injectable()
export class TodoService {
  todos$: ReplaySubject<ITodo[]> = new ReplaySubject<ITodo[]>();

  constructor(private todoLocalStorageService: TodoLocalStorageService) {
  }

  private updateTodos(todos: ITodo[]): void {
    this.todos$.next(todos);
  }

  getTodos(): void {
    const todos: ITodo[] = this.todoLocalStorageService.find();

    this.updateTodos(todos);
  }

  completeTodo(todoId: string): void {
    const completedTodo: ITodo = this.todoLocalStorageService.findById(todoId);
    completedTodo.status = true;
    const updatedTodos: ITodo[] = this.todoLocalStorageService.update(completedTodo);

    this.updateTodos(updatedTodos);
  }

  returnTodo(todoId: string): void {
    const returnedTodo: ITodo = this.todoLocalStorageService.findById(todoId);
    returnedTodo.status = false;
    const updatedTodos: ITodo[] = this.todoLocalStorageService.update(returnedTodo);

    this.updateTodos(updatedTodos);
  }

  addTodo(data: { name: string, description: string }): void {
    const newTodo: ITodo = new Todo(data);
    const updatedTodos: ITodo[] = this.todoLocalStorageService.create(newTodo);

    this.updateTodos(updatedTodos);
  }

  editTodo(editedTodo: ITodo): void {
    const updatedTodos: ITodo[] = this.todoLocalStorageService.update(editedTodo);

    this.updateTodos(updatedTodos);
  }

  deleteTodo(todoId: string): void {
    const deletedTodo: ITodo = this.todoLocalStorageService.findById(todoId);
    deletedTodo.deleted = true;
    const updatedTodos: ITodo[] = this.todoLocalStorageService.update(deletedTodo);

    this.updateTodos(updatedTodos);
  }
}
