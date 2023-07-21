import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Joaquim';

  userData = {
    email: 'joaquim@e-mail.com',
    role: 'Admin',
  };

  title = 'course-angular';
}
