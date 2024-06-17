import { Component, OnInit } from "@angular/core";
import { API_GET_SERVICE } from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  serviceInfo: any;

  constructor(private commonService: CommonServiceService) {}

  /**
   * call getServiceInfo()
   */
  ngOnInit(): void {
    this.getServiceInfo();
  }

  /**
   * call service json
   */
  getServiceInfo() {
    this.commonService.getInfo(API_GET_SERVICE).subscribe({
      next: (res) => {
        this.serviceInfo = res;
      },
      error: (err: any) => {
      },
      complete: () => {
      },
    });
  }
}
