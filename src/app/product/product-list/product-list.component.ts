import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    const productsObservavble = this.productService.getProducts();

    productsObservavble.subscribe(
      (data) => {this.products = data},
      (err) => {console.log('error'); }
    );
  }

}
