import { Component } from "@angular/core";
import { API_GET_PRICING } from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.scss"],
})
export class PricingComponent {
  pricingInfo: any;

  constructor(private commonService: CommonServiceService) {}

  /**
   * Call getPricingInfo()
   */
  ngOnInit(): void {
    this.getPricingInfo();
  }

  /**
   * Fetch Pricing Json
   */
  getPricingInfo() {
    this.commonService.getInfo(API_GET_PRICING).subscribe({
      next: (res) => {
        this.pricingInfo = res;
      },
      error: (err: any) => {
      },
      complete: () => {
      },
    });
  }
}
