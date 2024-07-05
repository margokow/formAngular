import { Component } from '@angular/core';
import { EnfantComponent } from '../enfant/enfant.component';
import { AutreEnfantComponent } from '../autre-enfant/autre-enfant.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [EnfantComponent, AutreEnfantComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  titleVisible: boolean = true
  changeTitle!: string
  title1: string = "C'est ..."
  titleTry: string = "Titre qui est amené par l'enfant"

  titleA1: string = "C'est un titre écrit dans le parent mais qui est amené par l'enfant"
  titleA2: string = "Pareil qu'au dessus"


  changeVisibleTitle(event: boolean) {
    this.titleVisible = event
  }

  change() {
    this.title1 = 'un titre'
  }

}
