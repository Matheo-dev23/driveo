import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {Product} from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    ProductCardComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  product1 : Product;

  constructor() {
    this.product1  = new Product();
    this.product1.title = "Prince";
    this.product1.description = "Biscuits fourrés goût vanille au blé complet ouverture facile ";
    this.product1.price = 1.85;
    this.product1.imgUrl = "https://cdn.auchan.fr/media/A0220150721000894551PRIMARY_1024x1024/B2CD/"
  }

}
