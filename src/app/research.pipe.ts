import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';

@Pipe({
  name: 'research',
})
export class ResearchPipe implements PipeTransform {
  transform(products: Product[], searchTerm: string): Product[] {
    //if no product or search term, return all products
    if (!searchTerm || !searchTerm) {
      return products;
    }
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
