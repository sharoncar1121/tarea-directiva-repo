import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { IonButton, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonButton, CommonModule, IonText],
})
export class ButtonComponent {
  age:number=0;
  mayorEdad:boolean= false;

  constructor() { }

  aumentar(): void{
    console.log('aumenta works!')
    this.age++;
    console.log(this.age)
  }

}
