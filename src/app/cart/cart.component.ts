import { Component, inject } from '@angular/core';
import { CartItemComponent } from './ui/cart-item/cart-item.component';
import { CartStateService } from '../shared/data-access/cart-state.service';
import { ProductItemCart } from '../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styles: ``
})
export default class CartComponent {
  state = inject(CartStateService).state

  removeCartItem(id: number) {
    this.state.remove(id);
  };

  decreaseCartItem(product: ProductItemCart) {
    this.state.update({
      product: product.product,
      quantity: product.quantity - 1
    });
  };

  increaseCartItem(product: ProductItemCart) {
    this.state.update({
      product: product.product,
      quantity: product.quantity + 1
    });
  };
}
