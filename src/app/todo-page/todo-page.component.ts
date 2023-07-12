import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent {
  todoList: any[] = [
    {
      id: 0,
      name: 'First Todo',   
    },
  ];

  onSubmit(form: NgForm) {
    if (
      form.controls['task'].value !== null &&
      form.controls['task'].value.trim() !== ''
    ) {
      this.todoList.push({
        id: this.todoList[this.todoList.length - 1]?.id + 1 || 0,
        name: form.controls['task'].value.trim(),
      });
    }

    form.reset();
  }

  deleteTodo(id: number) {
    let filteredArr = this.todoList.filter((todo) => todo.id !== id);
    this.todoList = filteredArr;
  }
}
