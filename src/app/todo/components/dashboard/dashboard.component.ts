import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { modalAnimation } from '../../animations/modal.animation';

import { TodoService } from '../../services/todo-service/todo.service';

import { ITodo } from '../../models/todo.model';
import { IModalConfig } from '../../interfaces/modal-config.interface';
import { ISelectOption } from 'src/app/shared/interfaces/select-option.interface';

import { ModalActions } from '../../enum/modal-actions.enum';
import { FilterOptions, getOptionsForSelect } from '../../enum/filter-options.enum';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [modalAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  todos$: Observable<ITodo[]>;

  filterValue: FilterOptions;
  isModalOpened: boolean = false;

  config: IModalConfig = null;
  selectOptions: ISelectOption<FilterOptions>[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todos$ = this.todoService.todos$;
    this.selectOptions = getOptionsForSelect();

    this.todoService.getTodos();
  }

  trackByFn(index: number, item: ITodo): string {
    return item.id;
  }

  selectOption(optionValue: FilterOptions): void {
    this.filterValue = optionValue;
  }

  completeTodo(todoId: string): void {
    this.todoService.completeTodo(todoId);
  }

  returnTodo(todoId: string): void {
    this.todoService.returnTodo(todoId);
  }

  addTodo(): void {
    this.config = { title: 'Добавить новое задание', type: ModalActions.ADD };
    this.openModal();
  }

  editTodo(todoItem: ITodo): void {
    this.config = { title: 'Редактировать задание', type: ModalActions.EDIT, data: todoItem };
    this.openModal();
  }

  deleteTodo(todoId: string): void {
    this.todoService.deleteTodo(todoId);
  }

  openModal(): void {
    this.isModalOpened = true;
  }

  closeModal(): void {
    this.isModalOpened = false;
  }
}
