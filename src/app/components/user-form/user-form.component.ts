import { Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardFormComponent } from '../card-form/card-form.component';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CardFormComponent],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  info: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]],
    prenom: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]],
    email: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    entreprise: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z]+$/)]],
    telephone: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]+$/)]],
  });

  infos: any[] = [];

    submitted: boolean = false;

    constructor(private formBuilder: FormBuilder){

    }

    private addCard() {
      this.infos.push(this.info.value)
      this.info.reset();
      this.submitted = false;
    }

    onSubmit(): boolean {
      this.submitted = true
      if (this.info.invalid) {
        return false
      } else {
        this.addCard()
        return true
      }
    }

    get form() {
      return this.info.controls
    }

}
