import { Injectable } from '@angular/core';
import { Anime } from './anime';
import { Observable, of} from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Episode } from './episode';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl: string = 'http://localhost:10882/api/';
  constructor(private http: HttpClient) { }

  getRecentEpisodes(): Observable<Episode[]> {
    return this.http.get<Episode[]>(this.apiUrl + 'episodes').pipe(
      tap(episodes => console.log('wtf')),
    );
  }
}
