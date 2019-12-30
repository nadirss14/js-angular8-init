import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IProduct } from "./product.model";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent {
  @Input() product: IProduct;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart(title: string) {
    console.log(`Se añadio el articulo ${title} al carrito`);
    this.productClicked.emit(this.product.id);
  }
}
