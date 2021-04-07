import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './views/post/post.component';
import { TodosComponent } from './views/todos/todos.component';

const routes: Routes = [

  {path: "post", component:PostComponent},
  {path:"todos", component:TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
