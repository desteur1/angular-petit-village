import { Component } from '@angular/core';

import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute, // the activatedroute help bind the route in the routes.ts to this component
    private ProductService: ProductsService
  ) {
    const productId = Number(this.route.snapshot.paramMap.get('id')); //get the id from the route ( fetches the value of id from the current route URL.)
    this.product = this.ProductService.getProducts().find(
      (currentProduct) => currentProduct.id === productId
    ); //find product by ID
  }
}
