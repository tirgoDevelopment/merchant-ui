import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value)) {
      return '';
    }

    // Convert the number to a string
    let numberString = value.toFixed(2);

    // Add spaces as thousand separators
    let parts = numberString.split('.');
    let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    let decimalPart = parts[1];

    return integerPart + '.' + decimalPart;
  }
}
