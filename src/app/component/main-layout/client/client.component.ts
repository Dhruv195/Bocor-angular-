import { Component } from "@angular/core";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent {
  /**
   * Image Json
   */
  images = [
    { src: "assets/img/clients/client-1.png" },
    { src: "assets/img/clients/client-2.png" },
    { src: "assets/img/clients/client-3.png" },
    { src: "assets/img/clients/client-4.png" },
    { src: "assets/img/clients/client-5.png" },
    { src: "assets/img/clients/client-6.png" },
  ];
}
