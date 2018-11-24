import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messagelangtransform'
})
export class MessagelangtransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
