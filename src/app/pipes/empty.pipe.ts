import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'emptyPipe'})
export class EmptyPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return !value.length;
    }
}