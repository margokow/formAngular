import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.css'
})
export class EnfantComponent {



  @Input() titleVisible!: boolean


  @Output()
  changeValue: EventEmitter<boolean> = new EventEmitter()


  onClick(){
    this.titleVisible = !this.titleVisible
    this.changeValue.emit(this.titleVisible)

  }
}
