import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: string, limit = 10, endStr = ''): unknown {
    return value.substring(0, limit) + endStr;
  }

}
