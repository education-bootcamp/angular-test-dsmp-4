import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone:true,
  name:'substring'
})
export default class SubstringPipe implements PipeTransform{
  transform(value: string, limit:number=15): any {
    if(!value) return;
    return value.length > limit ? value.substring(0, limit)+' see more ...':value;
  }

}
