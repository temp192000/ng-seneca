import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deliveryMSystem',
})
export class DeliveryMSystemPipe implements PipeTransform {
  transform(pageCount: number, ...args: unknown[]): string {
    if (pageCount >= 300) return 'Paperback not available! Buy an online copy';
    return 'Place your order now to avail Paperback';
  }
}
