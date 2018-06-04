import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { ApiService } from '../api.service';
import { Episode } from '../episode';

@Component({
  selector: 'app-recent-episdoes',
  templateUrl: './recent-episdoes.component.html',
  styleUrls: ['./recent-episdoes.component.css']
})
export class RecentEpisdoesComponent implements OnInit {

  episodes: Episode[];
  loading: boolean = true;
  error: boolean = false;

  constructor(private api: ApiService) { }

  getRecentEpisodes(): void {
    this.api.getRecentEpisodes().subscribe(episodes => {
      this.episodes = episodes;
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
      this.error = true;
    });
  }

  ngOnInit() {
    this.getRecentEpisodes();
  }
}
