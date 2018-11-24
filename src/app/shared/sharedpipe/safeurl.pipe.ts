import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeurl'
})
export class SafeurlPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {

  }

  transform(value) {
    console.log(value);
    console.log(this.sanitized.bypassSecurityTrustResourceUrl(value));

    return this.sanitized.bypassSecurityTrustResourceUrl(value);
  }
}
