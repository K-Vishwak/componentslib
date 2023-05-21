import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'uppercase1' })
export class UpperCasePipe1 implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return value.toUpperCase() + Date.now();
    }
}