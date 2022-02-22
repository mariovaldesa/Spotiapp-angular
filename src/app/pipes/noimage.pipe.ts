import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: any[] ): string {
    if ( !images ) {
      return 'assets/img/nophoto.png';      
    }
    if ( !images[0] ) {
      return 'assets/img/nophoto.png'
    } else {
      return images[0].url;
    }
  }

}
