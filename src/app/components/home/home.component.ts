import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  
  error: boolean;
  nuevasCanciones: any[] = [];
  loading: boolean;
  errorServiceMessage: string = '';

  constructor( private spotify: SpotifyService ) { 

    this.error = false;
    this.loading = true;
      
    this.spotify.getNewReleases().
      subscribe( ( response ) => {
        this.nuevasCanciones = response;
        this.loading = false;
      }, errorService => {
        this.loading = false;
        this.error = true;
        this.errorServiceMessage = errorService.error.error.message;
      });

  }
}
