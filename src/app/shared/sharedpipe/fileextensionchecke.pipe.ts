import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileextensionchecke'
})
export class FileextensioncheckePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == '') {
      return null;
    } else {
      let modified = value.split('/');
      console.log(modified[modified.length - 1]);
      let extension = modified[modified.length - 1].split('.');
      return (extension[extension.length - 1]);
    }

  }

}
