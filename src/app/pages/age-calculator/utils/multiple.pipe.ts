import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'multiple',
    standalone: true
})

export class Multiple implements PipeTransform {
    transform(numberValue: number = 0, result: string) {
        if (numberValue === 1)
            return result
        return result + 's'
    }
}