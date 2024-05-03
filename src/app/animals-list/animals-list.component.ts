import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { IonList, IonItem, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss'],
  standalone: true,
  imports:[CommonModule, IonList, IonItem, IonText]
})
export class AnimalsListComponent{

  names: string[] = ['Perro', 'Gato', 'Elefante', 'León', 'Tigre'];

  constructor() { }


}
