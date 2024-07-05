import { Component, Input, input } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {

  @Input()
  infos!: any[]

}
