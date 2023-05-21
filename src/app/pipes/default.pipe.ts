import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'defaultPipe' })
export class DefaultPipe implements PipeTransform {
    transform(value: any, defaultValue: string) {
        return value || defaultValue;
    }
}