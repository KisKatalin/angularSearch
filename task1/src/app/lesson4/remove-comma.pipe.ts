import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeComma'
})
export class RemoveCommaPipe implements PipeTransform {


  transform(value: any): any {
    if (value !== undefined && value !== null) {
      if( typeof value == 'number' ){
        value = value.toString();
      }
      let result = value.replace(/,/g, "")
      if (typeof +result == 'number' && isNaN(+result) == false) {
        return +result;
      } else {
        return "error";
      }
    } else {
      return "error";
    }
  }


}
