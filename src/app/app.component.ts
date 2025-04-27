import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  NgClass,
  NgStyle,
  PercentPipe,
  SlicePipe,
  UpperCasePipe
} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ParentComponent} from './components/parent/parent.component';
import SubstringPipe from './pipe/substring.pipe';
import {LkrPipe} from './pipe/lkr.pipe';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ParentComponent, DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, PercentPipe, SlicePipe, SubstringPipe, LkrPipe, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  amount=2500;
  simpleText='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid corporis cumque distinctio doloribus ea eaque, fugit impedit ipsa maiores necessitatibus, officia omnis pariatur quod sed ut vel vero, voluptates.';
}
