import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // add router link for you to be able to use it to navigate from one page to another

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mon-village';
}
