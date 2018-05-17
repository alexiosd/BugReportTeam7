import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from './bug.model';

@Pipe({
  name: 'nullifyStatus'
})
export class NullifyStatusPipe implements PipeTransform {

  transform(value: Bug, args?: any): Bug {
    if ((value.status === '') || (value.status === undefined)) {
      value.status = 'null';
    }
    return value;
  }

}
