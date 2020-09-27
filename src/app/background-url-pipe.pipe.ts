import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asUrl'
})
export class BackgroundUrlPipePipe implements PipeTransform {

  transform(value: string): string {
    return `url(assets/images/${value})`
  }

}
