import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"]
})
export class BannerComponent implements OnInit {
  imagesBanner: string[] = [
    "assets/images/banner-c.jpg",
    "assets/images/banner-r.jpeg",
    "assets/images/banner-z.jpeg"
  ];

  constructor() {}

  ngOnInit() {}
}
