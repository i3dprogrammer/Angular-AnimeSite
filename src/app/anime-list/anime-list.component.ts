import { Component, OnInit, Input } from '@angular/core';
import { Anime } from '../anime';
import { Episode } from '../episode';

@Component({
  selector: 'anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  @Input()
  episodes: Episode[];

  constructor() { }

  ngOnInit() {
  }

}
