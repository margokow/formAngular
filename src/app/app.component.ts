import { ListeCourseComponent } from './components/liste-course/liste-course.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModuleComponent } from './components/reactive-forms-module/reactive-forms-module.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { ParentComponent } from './components/parent/parent.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { AutreEnfantComponent } from './components/autre-enfant/autre-enfant.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { CardFormComponent } from './components/card-form/card-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ListeCourseComponent,
    ReactiveFormsModuleComponent,
    FormUserComponent,
    ParentComponent,
    EnfantComponent,
    AutreEnfantComponent,
    UserFormComponent,
    CardFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormAngular';
}
