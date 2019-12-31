import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"]
})
export class DemoComponent implements OnInit {
  constructor() {}
  title = "My First Angular APP";
  items = ["Nadir Soza", "Norlang Soza", "Dariana Soza"];

  addItems() {
    this.items.push(this.title);
  }

  deleteItems(index: number) {
    this.items.splice(index, 1);
  }
  ngOnInit() {}
}
