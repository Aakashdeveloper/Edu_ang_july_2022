import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'MyUpper'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: string): string {
        value = value.toUpperCase()
        return value
    }

}