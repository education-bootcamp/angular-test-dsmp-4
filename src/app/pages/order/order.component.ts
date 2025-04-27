import {Component, inject, Inject} from '@angular/core';
import {NgForOf} from '@angular/common';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-order',
  imports: [
    NgForOf
  ],
  standalone:true,
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  postService = inject(PostService);
  dataArray:any[]=[];
  constructor() {
    this.loadAllData();
  }

  private loadAllData() {
    this.postService.loadAll().subscribe(response=>{
      this.dataArray = response;
    })
  }
}
