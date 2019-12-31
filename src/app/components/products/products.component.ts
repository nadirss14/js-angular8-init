import { Component, OnInit } from "@angular/core";
import { IProduct } from "../productBage/productBage.model";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [
    {
      id: "1",
      image: "assets/images/camiseta.png",
      title: "Camiseta",
      price: 320.0,
      description: "bla bla bla bla bla",
      moneda: "COR",
      date: new Date()
    },
    {
      id: "3",
      image: "assets/images/mug.png",
      title: "Mug",
      price: 90.0,
      description: "bla bla bla bla bla",
      moneda: "COR",
      date: new Date()
    },
    {
      id: "4",
      image: "assets/images/pin.png",
      title: "Pin",
      price: 120.0,
      description: "bla bla bla bla bla",
      moneda: "COR",
      date: new Date()
    },
    {
      id: "5",
      image: "assets/images/stickers1.png",
      title: "Stickers",
      price: 35.0,
      description: "bla bla bla bla bla",
      moneda: "COR",
      date: new Date()
    },
    {
      id: "6",
      image: "assets/images/stickers2.png",
      title: "Stickers",
      price: 50.0,
      description: "bla bla bla bla bla",
      moneda: "COR",
      date: new Date()
    }
  ];

  constructor() {}

  clickProduct(id: string) {
    console.log("El valor del id del elemento es: " + id);
  }

  showModal(index: string) {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    const urlImage = this.products.find(product => product.id === index);
    const imgModal = document.getElementById("imgModal");
    imgModal.setAttribute("src", urlImage.image);
  }

  closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  ngOnInit() {}
}
