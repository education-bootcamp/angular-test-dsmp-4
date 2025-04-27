import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lkr',
  standalone:true
})
export class LkrPipe implements PipeTransform {

  transform(value: number): string {
    return 'රු' + value.toLocaleString('en-LK',{
      minimumFractionDigits:2,
      maximumFractionDigits:2,
    });
  }

}
