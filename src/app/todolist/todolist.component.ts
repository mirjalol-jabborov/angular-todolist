import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  @Input() todo: Todo | undefined;
  @Output() deleteTodo = new EventEmitter();

  deleteItem(id: number) {
    this.deleteTodo.emit(id)
  }

  constructor() {}
}
