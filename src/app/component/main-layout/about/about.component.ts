import { Component, OnInit } from "@angular/core";
import { API_GET_ABOUT } from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  aboutInfo: any;
  showPopup = false;
  isDescriptionShort = true;

  /**
   *
   * @param commonService fetch api
   */
  constructor(private commonService: CommonServiceService) {}

  /**
   * call api function
   */
  ngOnInit(): void {
    this.getAboutInfo();
  }

  /**
   * Fetch About Json
   */
  getAboutInfo() {
    this.commonService.getInfo(API_GET_ABOUT).subscribe({
      next: (res) => {
        this.aboutInfo = res;
        this.isDescriptionShort = res.headingDecryption?.length <= 100;
      },
      error: (err: any) => {
      },
      complete: () => {
      },
    });
  }
  /**
   * Show Popup
   */
  viewMore() {
    this.showPopup = true;
  }
}
