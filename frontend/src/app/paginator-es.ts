import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
    changes = new Subject<void>();


    firstPageLabel = `Primera página`;
    itemsPerPageLabel = `Restaurantes por página`;
    lastPageLabel = `Última página`;

    nextPageLabel = 'Página siguiente';
    previousPageLabel = 'Página anterior';

    getRangeLabel(page: number, pageSize: number, length: number): string {
        if (length === 0 || pageSize === 0) {
            return `0 de ${length}`;
        }
        const amountPages = Math.ceil(length / pageSize);
        return `Página ${page + 1} de ${amountPages}`;
    }
}

