import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  // Fuente de Youtube para que funcione el paginador: 
  // https://www.youtube.com/watch?v=hV5xmSOW6C8
  // El chico del video pone page_size: number | string pero sino da error

  transform(array: any[], page_size: number | any, page_number: number): any[] {
    if (!array.length) return [];
    if (page_size === 'all') {
      return array;
    }
    page_size = page_size || 10;
    page_number = page_number || 1;
    --page_number;
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

}

