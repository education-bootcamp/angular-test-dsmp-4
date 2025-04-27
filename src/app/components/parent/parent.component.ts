import {Component} from '@angular/core';
import {ChildComponent} from '../child/child.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [
    ChildComponent,
    FormsModule
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  standalone: true
})
export class ParentComponent {
  text='';
  setData(data:any){
    this.text=data;
  }
}
