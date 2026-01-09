import {Component, input, InputSignal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [
    MatIcon
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product: InputSignal<Product> = input(new Product());

}
