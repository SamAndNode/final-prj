import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import StudentService
import { StudentService } from '../Services/student.service';
// Import HttpClientModule
import { HttpClientModule } from '@angular/common/http';

const appModule = {
  bootstrap: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  declarations: [
  ],
  providers: [
    StudentService
  ]
};


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
