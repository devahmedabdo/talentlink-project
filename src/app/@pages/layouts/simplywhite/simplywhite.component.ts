import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { RootLayout } from "../root/root.component";
import * as CryptoJS from "crypto-js";

@Component({
  selector: "simplywhite-layout",
  templateUrl: "./simplywhite.component.html",
  styleUrls: ["./simplywhite.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SimplyWhiteLayout extends RootLayout implements OnInit {
  ngOnInit() {}
}
