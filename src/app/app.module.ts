import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { RecentEpisdoesComponent } from './recent-episdoes/recent-episdoes.component';

const test_routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: RecentEpisdoesComponent },
  { path: 'watch/:id', component: RecentEpisdoesComponent },
  { path: 'list', component: RecentEpisdoesComponent },
  { path: 'upload', component: RecentEpisdoesComponent },
  { path: '**', component: RecentEpisdoesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    AnimeCardComponent,
    RecentEpisdoesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(test_routes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
