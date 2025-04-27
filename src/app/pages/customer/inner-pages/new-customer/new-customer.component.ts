import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-customer',
  imports: [],
  standalone: true,
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.scss'
})
export class NewCustomerComponent {
  incomingValue: any = '';

  constructor(private activatedRoute: ActivatedRoute) {
    //this.incomingValue = activatedRoute.snapshot.paramMap.get('data');
    activatedRoute.paramMap.subscribe(resp=>{
      this.incomingValue = resp.get('data');
    })
  }

}
