import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'store', loadChildren: () =>import('./store/features/product-shell/product.route')},
    {path: 'cart', loadChildren: () =>import('./cart/cart.route')},
    {path:'**', redirectTo: 'store'}
];
