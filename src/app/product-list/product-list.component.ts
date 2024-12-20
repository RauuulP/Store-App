import { Component } from '@angular/core';

import { products } from '../products';
import { CommonModule } from '@angular/common';
import { ProductAlertsComponent } from "../product-alerts/product-alerts.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule, ProductAlertsComponent]
})
export class ProductListComponent {
  products = [...products];

  share() {
    console.log("The share button has been clicked.")
    window.alert('The product has been shared!');
  }

  onNotify(){
    console.log("User is notified!")
    window.alert('You will get a notification when the product is on sale !!!');
  }

}


