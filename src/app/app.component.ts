import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Pentriks';

  userData = {
    email: 'pentriks@e-mail.com',
    role: 'Admin',
  };

  title = 'course-angular';
}
