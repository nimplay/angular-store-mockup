import { Component, input, output } from '@angular/core';
import { ProductItemCart } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  productCartItem = input.required<ProductItemCart>();

  removeCartItem = output<number>();

  increaseCartItem = output<ProductItemCart>();

  decreaseCartItem = output<ProductItemCart>();


}
