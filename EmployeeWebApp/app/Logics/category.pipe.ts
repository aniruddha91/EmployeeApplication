﻿import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term:string): any {
        console.log('term', term);

        return term
            ? items.filter(item => item.employeeType.toLowerCase().indexOf(term.toLowerCase()) !== -1)
            : items;
    }
}

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {

    transform(records: Array<any>, args?: any): any {
        if (records)
        return records.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.direction;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.direction;
            }
            else {
                return 0;
            }
        });
    };
}
