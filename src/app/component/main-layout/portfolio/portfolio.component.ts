import { Component, OnInit } from "@angular/core";
import { API_GET_PORTFOLIO } from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
  portfolioInfo: any;
  portfolioFilterList: any[] = [];
  constructor(private commonService: CommonServiceService) {}

  /**
   * call getPortfolio()
   */
  ngOnInit(): void {
    this.getPortfolioInfo();
  }

  /**
   * fetch portfolio json
   */
  getPortfolioInfo() {
    this.commonService.getInfo(API_GET_PORTFOLIO).subscribe({
      next: (res) => {
        this.portfolioInfo = res;
        this.portfolioFilterList = res.portfolioList;
      },
      error: (err: any) => {
      },
      complete: () => {
      },
    });
  }

  /**
   *
   * @param item filter category
   * @param list list of cards
   */
  portFolioFilter(item: any, list: HTMLElement) {

    if (item === "All") {
      this.portfolioFilterList = this.portfolioInfo.portfolioList;
    } else if (item === "App") {
      this.portfolioFilterList = this.portfolioInfo.portfolioList.filter(
        (ele: any) => ele.Decryption === "App"
      );
    } else if (item === "Card") {
      this.portfolioFilterList = this.portfolioInfo.portfolioList.filter(
        (ele: any) => ele.Decryption === "Card"
      );
    } else if (item === "Web") {
      this.portfolioFilterList = this.portfolioInfo.portfolioList.filter(
        (ele: any) => ele.Decryption === "Web"
      );
    }
  }
}
