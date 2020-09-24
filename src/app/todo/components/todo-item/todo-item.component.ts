import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { widthAnimation } from '../../animations/width.animation';

import { ITodo } from '../../models/todo.model';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  animations: [ widthAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: ITodo;

  @Output() completeEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() returnEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() editEvent: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();

  showActions: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleActions(): void {
    this.showActions = !this.showActions;
  }

  completeTodo(): void {
    this.completeEvent.emit(this.todoItem.id);
    this.toggleActions();
  }

  returnTodo(): void {
    this.returnEvent.emit(this.todoItem.id);
    this.toggleActions();
  }

  editTodo(): void {
    this.editEvent.emit(this.todoItem);
    this.toggleActions();
  }

  deleteTodo(): void {
    this.deleteEvent.emit(this.todoItem.id);
    this.toggleActions();
  }
}
