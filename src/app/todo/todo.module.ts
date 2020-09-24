import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';
import { SharedModule } from '../shared/shared.module';

import { TodoService } from './services/todo-service/todo.service';
import { TodoLocalStorageService } from './services/todo-local-storage-service/todo-local-storage.service';

import { TodoListPipe } from './pipes/todo-list.pipe';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoModalComponent } from './components/todo-modal/todo-modal.component';


@NgModule({
  declarations: [TodoListPipe, DashboardComponent, TodoItemComponent, TodoModalComponent],
  imports: [CommonModule, ReactiveFormsModule, TodoRoutingModule, SharedModule],
  providers: [TodoService, TodoLocalStorageService]
})
export class TodoModule {
}
