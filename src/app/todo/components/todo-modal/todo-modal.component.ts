import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { TodoService } from '../../services/todo-service/todo.service';

import { IModalConfig } from '../../interfaces/modal-config.interface';

import { ModalActions } from '../../enum/modal-actions.enum';


@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoModalComponent implements OnInit {
  @Input() config: IModalConfig;
  @Output() closeEvent: EventEmitter<void> = new EventEmitter<void>();

  title: string;
  actionType: ModalActions;
  data: any;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.title = this.config.title;
    this.actionType = this.config.type;
    this.data = this.config.data || null;

    this.initFormGroup();
  }

  private initFormGroup(): void {
    switch (this.actionType) {
      case ModalActions.ADD:
        this.formGroup = this.fb.group({
          name: [''],
          description: ['']
        });
        break;
      case ModalActions.EDIT:
        this.formGroup = this.fb.group({
          name: [this.data.name],
          description: [this.data.description]
        });
        break;
    }
  }

  close(): void {
    this.closeEvent.emit();
  }

  save(): void {
    switch (this.actionType) {
      case ModalActions.ADD:
        this.todoService.addTodo(this.formGroup.value);
        break;
      case ModalActions.EDIT:
        this.todoService.editTodo({ ...this.data, ...this.formGroup.value });
        break;
    }

    this.close();
  }
}
