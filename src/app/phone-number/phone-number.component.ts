import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
  standalone: true,
  imports:[IonInput, CommonModule, FormsModule]
})
export class PhoneNumberComponent {

  phone: string = '';

  constructor() { }


}
