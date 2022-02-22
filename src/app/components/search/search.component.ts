import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})

export class SearchComponent {

  error:boolean;
  artistas: any[] = [];
  loading: boolean = false;
  errorServiceMessage:string = '';

  constructor( private spotify: SpotifyService) { 
    this.error = false;
  }

  buscar( termino: string ) {
    this.loading = true;
    this.spotify.getArtists( termino )
      .subscribe( ( res ) => {
        console.log( res );
        this.artistas = res;
        this.loading = false;
      }, errorService => { 
        this.loading = false;
        this.error = true;
        this.errorServiceMessage = errorService.error.error.message;
        
      })
  }
}
