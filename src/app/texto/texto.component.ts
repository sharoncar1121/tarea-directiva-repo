import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonLabel, IonButton, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.scss'],
  standalone: true,
  imports: [CommonModule, IonLabel, IonButton, IonItem],
})
export class TextoComponent {
  colorHex: string = '#EFEB06';
  colorButton: string = 'danger'; // Puedes asignar uno de los valores: "primary", "dark", "danger"
  constructor() { }

}
