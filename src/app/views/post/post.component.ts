import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Post } from '../../model';
// import { DataService } from '../data.service'
// import { Post } from '


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:Post[]=[]
  data: any;
  constructor(private dataapi:DataService ) { }

  ngOnInit(): void {
    this.dataapi.getPosts().subscribe(data =>this.posts=data)

  }

}
