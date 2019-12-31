import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IProduct } from "./productBage.model";
@Component({
  selector: "app-product",
  templateUrl: "./productBage.component.html",
  styleUrls: ["./productBage.component.scss"]
})
export class ProductBageComponent {
  @Input() product: IProduct;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart(title: string) {
    console.log(`Se añadio el articulo ${title} al carrito`);
    this.productClicked.emit(this.product.id);
  }
}
