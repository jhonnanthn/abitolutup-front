import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, getLocaleCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
    constructor(@Inject(LOCALE_ID) public locale: string){
    }

    transform(value: number): any {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    }

}