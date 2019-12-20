import { Component } from "@angular/core";
import { IProduct } from "./components/products/product.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "My First Angular APP";
  items = ["Nadir Soza", "Norlang Soza", "Dariana Soza"];

  products: IProduct[] = [
    {
      id: "1",
      image: "assets/images/camiseta.png",
      title: "Camiseta",
      price: 320.0,
      description: "bla bla bla bla bla",
      moneda: "COR"
    },
    {
      id: "3",
      image: "assets/images/mug.png",
      title: "Mug",
      price: 90.0,
      description: "bla bla bla bla bla",
      moneda: "COR"
    },
    {
      id: "4",
      image: "assets/images/pin.png",
      title: "Pin",
      price: 120.0,
      description: "bla bla bla bla bla",
      moneda: "COR"
    },
    {
      id: "5",
      image: "assets/images/stickers1.png",
      title: "Stickers",
      price: 35.0,
      description: "bla bla bla bla bla",
      moneda: "COR"
    },
    {
      id: "6",
      image: "assets/images/stickers2.png",
      title: "Stickers",
      price: 50.0,
      description: "bla bla bla bla bla",
      moneda: "COR"
    }
  ];
  addItems() {
    this.items.push(this.title);
  }

  deleteItems(index: number) {
    this.items.splice(index, 1);
  }

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
}
