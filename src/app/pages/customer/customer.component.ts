import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-customer',
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    FormsModule
  ],
  standalone:true,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {
  text='saman';
}
