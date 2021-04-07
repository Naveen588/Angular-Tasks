import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Todos } from 'src/app/providers/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos?: Todos[];

  constructor(private dataapi:DataService) { }

  ngOnInit(): void {
    this.dataapi.gettodos().subscribe((data: Todos[]) =>this.todos=data)
  }

}
