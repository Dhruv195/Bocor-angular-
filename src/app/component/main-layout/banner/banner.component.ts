import { Component } from "@angular/core";
import { NgbCarouselConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { API_GET_HOME } from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent {
  carouselInterval = 2000;
  carouselWrap = true;

  /**
   *
   * @param commonService fetch api
   * @param config carousel access
   */
  constructor(
    private commonService: CommonServiceService,
    config: NgbCarouselConfig
  ) {
    config.interval = this.carouselInterval;
    config.wrap = this.carouselWrap;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  homeInfo: any;
  ngOnInit(): void {
    this.getHomeInfo();
  }

  /**
   * Fetch Home Json
   */
  getHomeInfo() {
    this.commonService.getInfo(API_GET_HOME).subscribe({
      next: (res) => {
        this.homeInfo = res;
      },
      error: (err: any) => {
      },
      complete: () => {
      },
    });
  }

  /**
   *
   * @param event Call video in  auto play
   */
  videoPlay(video: HTMLElement, event:any) {
    video.requestFullscreen()
  }


}
