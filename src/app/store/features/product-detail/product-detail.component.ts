import { Component, effect, inject, input } from '@angular/core';
import { ProductsDetailStateService } from '../../data-access/product-details-state.service';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductsDetailStateService]
})
export default class ProductDetailComponent {
  productDetailState = inject(ProductsDetailStateService).state
  cartState = inject(CartStateService).state

  id = input.required<string>()

  constructor() {
    effect(() =>{
      this.productDetailState.getById(this.id())
    })
  }

  addToCart() {
    this.cartState.add({
      product: this.productDetailState.product()!,
      quantity: 1
    })
  }
}
