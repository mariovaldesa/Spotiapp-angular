import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery( query: string ) {
    
    const url = `https://api.spotify.com/v1/${ query }`
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB7Nf_xIkQG1t12Gh7P-GafwWQVBl7ynj4hHWQaCwIozdFC9-sFxSvJxeZBcRfinbO2SgGgHLEPl7Pftt0'
    });

    return this.http.get( url, { headers } );
    
  }

  getNewReleases() {
    return this.getQuery( 'browse/new-releases' )
      .pipe( map( (res: any) => res.albums.items));

  }

  getArtists( termino: string) {
    return this.getQuery( `search?q=${ termino }&type=artist&limit=15` )
      .pipe( map( (res: any) => res.artists.items ) );
  }

  getArtist( id: string ) {
    return this.getQuery( `artists/${ id }` );
  }

  getToptracks( id: string ) {
    return this.getQuery( `artists/${ id }/top-tracks/?country=us` )
      .pipe( map( (res:any) => res.tracks ) );
  }
}
