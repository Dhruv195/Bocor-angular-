import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import {
  API_GET_HEADER,
  API_GET_HOME,
} from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  headerInfo: any;

  /**
   *
   * @param commonService Fetch api service
   * @param viewportScroller link to section
   */
  constructor(
    private commonService: CommonServiceService,
    private viewportScroller: ViewportScroller
  ) {}

  /**
   * assign id to section
   */
  ngOnInit(): void {
    this.getHeaderInfo();

     this.commonService.sectionChange.subscribe((sectionId) => {
      this.scrollToSection(sectionId);
    });
  }

  /**
   * call fetch heder json
   */
  getHeaderInfo() {
    this.commonService.getInfo(API_GET_HEADER).subscribe({
      next: (res) => {
        this.headerInfo = res;
      },
      error: (err: any) => {},
      complete: () => {},
    });
  }

  /**
   *
   * @param sectionId pass the section id to scroll view
   */
  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
    // setTimeout(() => {
    // }, 1000);
  }
}
