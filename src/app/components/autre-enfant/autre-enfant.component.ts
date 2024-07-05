import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-autre-enfant',
  standalone: true,
  imports: [],
  templateUrl: './autre-enfant.component.html',
  styleUrl: './autre-enfant.component.css'
})
export class AutreEnfantComponent {

  @Input() titleA1!: string
  @Input() titleA2!: string
  @Input() titleTry!: string


  }


