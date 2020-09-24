import { Pipe, PipeTransform } from '@angular/core';
import { FilterOptions } from '../enum/filter-options.enum';

import { ITodo } from '../models/todo.model';


@Pipe({ name: 'todoList' })
export class TodoListPipe implements PipeTransform {
  transform(todos: ITodo[], filterOption: FilterOptions): ITodo[] {
    switch (filterOption) {
      case FilterOptions.ALL:
        return todos;
      case FilterOptions.CURRENT:
        return todos.filter((todo: ITodo) => !todo.status && !todo.deleted);
      case FilterOptions.COMPLETED:
        return todos.filter((todo: ITodo) => todo.status && !todo.deleted);
      case FilterOptions.DELETED:
        return todos.filter((todo: ITodo) => todo.deleted);
    }
  }
}
