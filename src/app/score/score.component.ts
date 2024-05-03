import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ScoreComponent  {
  score: number = Math.floor(Math.random() * 101);

  constructor() { }


}
