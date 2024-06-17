import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { API_GET_FAQ } from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FaqComponent implements OnInit {
  faqInfo: any;

  /**
   *
   * @param commonService Fetch Api service
   */
  constructor(private commonService: CommonServiceService) {}

  /**
   * Call getFaqInfo()
   */
  ngOnInit(): void {
    this.getFaqInfo();
  }

  /**
   * Fetch FAQ-Info Json
   */
  getFaqInfo() {
    this.commonService.getInfo(API_GET_FAQ).subscribe({
      next: (res) => {
        this.faqInfo = res;
      },
      error: (err: any) => {
      },
      complete: () => {
      },
    });
  }
}
