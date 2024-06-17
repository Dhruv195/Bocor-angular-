import { Component, OnInit } from "@angular/core";
import { API_GET_FAQ } from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-all-faq",
  templateUrl: "./all-faq.component.html",
  styleUrls: ["./all-faq.component.scss"],
})
export class AllFaqComponent implements OnInit {
  faqInfo: any;
  catFilter = "";
  constructor(private commonService: CommonServiceService) {}
  faqList:any[]=[]
  /**
   * call getFaqInfo()
   */
  ngOnInit(): void {
    this.getFaqInfo();
  }

  /**
   * Fetch FAQ JSon
   */
  getFaqInfo() {
    this.commonService.getInfo(API_GET_FAQ).subscribe({
      next: (res) => {
        this.faqInfo = res;
        this.catFilter = this.faqInfo.faqList[0].category;

      },
      error: (err: any) => {
      },
      complete: () => {
      },
    });
  }

  filter(li: any) {
    this.faqList = this.faqInfo.faqList.filter((e: any) => {
      return e.category === li
     })
   }
}
