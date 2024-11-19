import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  gadget: Product[] = [];
  furniture: Product[] = [];
  shoe: Product[] = []; 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.gadget = this.productService.getGadgets();
    this.furniture = this.productService.getFurniture();
    this.shoe = this.productService.getShoes();
  }
}
