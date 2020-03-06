import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { shoe } from  '../shoe';
import { CartService } from '../cart.service';



@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  details = {
    id: null,
    name: "",
    image: "",
    description: "",
    price: null,
    brand: ""
  };

  shoes = shoe;

  addToCart(product) {
    window.alert("Your product has been added to the cart!");
    this.cartService.addToCart(product);
  }

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get("id") !== "null") {
      const id = parseInt(this.route.snapshot.paramMap.get("id"), 0);
      this.details = this.shoes.find(x => x.id === id);
    }
  }
}
