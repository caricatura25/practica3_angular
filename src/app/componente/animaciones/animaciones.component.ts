import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-animaciones',
  templateUrl: './animaciones.component.html',
  styleUrls: ['./animaciones.component.css'] ,
  animations: [
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    }))
  ]
})
export class AnimacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
