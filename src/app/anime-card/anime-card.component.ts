import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../episode';

@Component({
  selector: 'anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css']
})
export class AnimeCardComponent implements OnInit {

  @Input()
  episode: Episode;

  constructor() { }

  ngOnInit() {
  }

}
