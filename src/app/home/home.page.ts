import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ButtonComponent } from '../button/button.component';
import { AnimalsListComponent } from '../animals-list/animals-list.component';
import { PhoneNumberComponent } from '../phone-number/phone-number.component';
import { ScoreComponent } from '../score/score.component';
import { TextoComponent } from '../texto/texto.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader,
    IonToolbar, IonTitle,
    IonContent,
    ButtonComponent,
    AnimalsListComponent,
    PhoneNumberComponent,
    ScoreComponent,
  TextoComponent],
})
export class HomePage {
  constructor() { }
}
