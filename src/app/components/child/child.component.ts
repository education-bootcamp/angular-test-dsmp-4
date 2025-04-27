import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  standalone: true
})
export class ChildComponent {
  @Output() valueEmitter: EventEmitter<any> =
    new EventEmitter();

  parseData(value: any) {
    this.valueEmitter.emit(value);
  }
}
