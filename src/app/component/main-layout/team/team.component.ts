import { Component, OnInit } from "@angular/core";
import { API_GET_TEAM } from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"],
})
export class TeamComponent implements OnInit {
  teamInfo: any;

  constructor(private commonService: CommonServiceService) {}

  /**
   * call getTeamInfo()
   */
  ngOnInit(): void {
    this.getTeamInfo();
  }

  /**
   * call Team json
   */
  getTeamInfo() {
    this.commonService.getInfo(API_GET_TEAM).subscribe({
      next: (res) => {
        this.teamInfo = res;
      },
      error: (err: any) => {
      },
      complete: () => {
      },
    });
  }
}
