import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from '@angular/common';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-statistics',
  imports: [
    NgForOf
  ],
  standalone:true,
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
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
