import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'powerPipe' })
export class PowerPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return Number(Math.pow(value, args[0])) + args[1] + args[2];
    }
}