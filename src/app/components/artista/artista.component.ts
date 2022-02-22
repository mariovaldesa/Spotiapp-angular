import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;
  tracks: any[] = [];

  constructor( private router: ActivatedRoute,
               private spotify:SpotifyService ) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtista( params['id'] );
      this.getToptracks( params['id'] );

    } )
  }

  getArtista( id: string ) {
    
    this.spotify.getArtist( id ).subscribe( ( artista: any ) => {
      this.artista = artista;
      this.loading = false;
    });
  }

  getToptracks( id: string ) {
    this.spotify.getToptracks( id ).subscribe( ( tracks: any ) => {
      this.tracks = tracks;
      console.log(this.tracks);
    } );
  }
}
