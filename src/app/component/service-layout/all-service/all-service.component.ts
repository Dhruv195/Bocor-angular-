import { Component, OnInit } from "@angular/core";
import { API_GET_SERVICE } from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-all-service",
  templateUrl: "./all-service.component.html",
  styleUrls: ["./all-service.component.scss"],
})
export class AllServiceComponent implements OnInit {
  page = 1;
  pageSize = 6;

  serviceInfo: any;

  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.getServiceInfo();
  }

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
