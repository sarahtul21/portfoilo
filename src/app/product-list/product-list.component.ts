import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Bike } from '../products';
import { BikesService } from '../bikes.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // imports:[
  //   NgIf,
  //   NgFor,
  //   RouterOutlet
  // ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
})
export class ProductListComponent {

  products:any
  bikes : Bike[] = []

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes(): void {
    this.bikesService.getBikes()
        .subscribe(products => this.bikes = products.bikes);
    
  }
  addBike(bike : Bike): void {
    this.bikesService
      .addBike(bike)
      .subscribe(bike => this.bikes.push(bike));
  }

  deleteBikes(bike : Bike): void {
  this.bikesService.deleteBike(bike.id)
      .subscribe();
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor(private bikesService: BikesService) {}
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/