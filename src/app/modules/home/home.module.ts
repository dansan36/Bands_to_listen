import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Components
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteComponent } from './components/todo-button-delete/todo-button-delete.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
//page
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
