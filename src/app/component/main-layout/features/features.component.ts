import { Component, OnInit } from "@angular/core";
import { API_GET_FEATURES } from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"],
})
export class FeaturesComponent implements OnInit {
  featuresInfo: any;

  /**
   *
   * @param commonService Fetch Api service
   */
  constructor(private commonService: CommonServiceService) {}

  /**
   * Call getFeaturesInfo()
   */
  ngOnInit(): void {
    this.getFeaturesInfo();
  }

  /**
   * Call FEATURES json
   */
  getFeaturesInfo() {
    this.commonService.getInfo(API_GET_FEATURES).subscribe({
      next: (res) => {
        this.featuresInfo = res;
      },
      error: (err: any) => {
      },
      complete: () => {
      },
    });
  }
}
