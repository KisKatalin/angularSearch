import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[],sort: string, active: string) : any[] {
    if (!value) return [];
    if (!sort) return value;
if(sort === 'asc'){
  return value.sort((a,b) => {
    if(a[active] < b[active]){
      return -1
    }
    if(a[active] > b[active]){
      return 1
    }
    return 0
  });
}
return value.sort((a,b) => {
  if(a[active]> b[active]){
    return -1
  }
  if(a[active] < b[active]){
    return 1
  }
  return 0
});
    
  }
  

}
