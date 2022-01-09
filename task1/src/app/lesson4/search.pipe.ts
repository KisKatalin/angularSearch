import { Pipe, PipeTransform } from '@angular/core';
import { first } from 'rxjs';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any[],search : string): any[] {
    if (!value) return [];
    if (!search) return value;
    let filterFirst = value.filter(item => item.first.toLowerCase().includes(search.toLowerCase())),
    filterLast = value.filter(item => item.last.toLowerCase().includes(search.toLowerCase())),
    filterPhone = value.filter(item => item.phone.toLowerCase().includes(search.toLowerCase()));
    return Array.prototype.concat(Array.prototype.concat(filterFirst, filterLast), filterPhone);
  }

}
