import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';

@Pipe({
  name: 'sortByPrice',
})
export class SortByPricePipe implements PipeTransform {
  transform(products: Product[], order: 'asc' | 'desc' = 'asc'): Product[] {
    // The pipe expects the input products to be an array of Product objects, where Product here is our interface.Parameter Type: The order parameter accepts one of two specific string values: 'asc' (ascending) or 'desc' (descending)Default Value: If no value is passed for order, it defaults to 'asc' (ascending order).
    if (!products) {
      //Checks if the products array is invalid or empty and return an empty value (though [] is truthy in JavaScript).
      return [];
    }
    return products.sort((a: any, b: any) => {
      //If a.price is less than b.price, the result is negative → a comes before b,If a.price is greater than b.price, the result is positive → b comes before a and If they are equal, the result is 0, and their order remains unchanged
      const comparison = a.price - b.price; // ascending order
      //If order === 'asc' is true, the function returns the calculated comparison (a.price - b.price).    If order === 'asc' is false (i.e., order is 'desc'), the function returns the negative of the comparison (-comparison), effectively reversing the sort order to descending.
      return order === 'asc' ? comparison : -comparison; // descending order
    });
  }
}
