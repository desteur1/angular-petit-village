import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { ResearchPipe } from '../research.pipe';
import { FormsModule } from '@angular/forms'; //is the key that enables two-way data binding using ngModel in Angular
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    SortByPricePipe,
    ResearchPipe,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Au petit village';
  products: Product[] = [];
  sortOrder: 'asc' | 'desc' = 'asc'; // declear sortorderr variable
  searchTerm: string = '';

  constructor(private ProductService: ProductsService) {
    this.products = this.ProductService.getProducts();
  }
  // toggleSortOrder() {
  //   this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc'; //toggle between asc and desc
  // }
}
