import { Component, HostListener, OnInit } from "@angular/core";
import { API_GET_TEAM } from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-all-team",
  templateUrl: "./all-team.component.html",
  styleUrls: ["./all-team.component.scss"],
})
export class AllTeamComponent implements OnInit {
  teamInfo: any;
  displayedTeamData: any[] = [];
  currentIndex: number = 0;
  batchSize: number = 4;

  constructor(private commonService: CommonServiceService) {}

  /**
   * Call getTeamInfo()
   */
  ngOnInit(): void {
    this.getTeamInfo();
  }

  /**
   * Fetch Team JSon
   */
  getTeamInfo() {
    this.commonService.getInfo(API_GET_TEAM).subscribe({
      next: (res) => {
        this.teamInfo = res;
        this.loadMoreData();
      },
      error: (err: any) => {
      },
      complete: () => {
      },
    });
  }

  loadMoreData() {
    if (this.currentIndex < this.teamInfo.teamList.length) {
      const nextIndex = this.currentIndex + this.batchSize;
      const nextBatch = this.teamInfo.teamList.slice(
        this.currentIndex,
        nextIndex
      );
      this.displayedTeamData = this.displayedTeamData.concat(nextBatch);
      this.currentIndex = nextIndex;
    }
  }
  @HostListener("window:scroll")
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 400
    ) {
      if (this.teamInfo.teamList.length <= 30) {
        this.displayedTeamData = [
          ...this.teamInfo?.teamList,
          ...this.teamInfo?.teamList.slice(0, 4),
        ];
      }
    }
  }
}
