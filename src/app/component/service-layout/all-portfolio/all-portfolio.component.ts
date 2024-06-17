import { Component, OnInit } from "@angular/core";
import {
  API_GET_PORTFOLIO,
  API_GET_SERVICE,
} from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-all-portfolio",
  templateUrl: "./all-portfolio.component.html",
  styleUrls: ["./all-portfolio.component.scss"],
})
export class AllPortfolioComponent implements OnInit {
  portfolioInfo: any;
  portfolioFilterList: any[] = [];
  constructor(private commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.getPortfolioInfo();
  }

  /**
   * CAll Portfolio json
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
   * @param item filter value
   * @param list portfolio list
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

  /**
   * Add More data in filter
   */
  loadMore() {
    this.portfolioInfo.portfolioList = [
      ...this.portfolioFilterList,
      ...this.portfolioFilterList,
    ];

    this.portfolioFilterList=this.portfolioInfo.portfolioList
  }
}
