import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbAlertConfig } from "@ng-bootstrap/ng-bootstrap";
import { API_GET_FOOTER } from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  type = "";
  footerInfo: any;
  submitted = false;
  success = false;
  subscribeForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
  });
  /**
   *
   * @param commonService fetch service
   * @param alertConfig
   */
  constructor(
    private commonService: CommonServiceService,
    alertConfig: NgbAlertConfig
  ) {
    alertConfig.type = "success";
    alertConfig.dismissible = false;
  }

  ngOnInit(): void {
    this.getFooterInfo();
  }

  /**
   * Fetch Footer Json
   */
  getFooterInfo() {
    this.commonService.getInfo(API_GET_FOOTER).subscribe({
      next: (res) => {
        this.footerInfo = res;
      },
      error: (err: any) => {
      },
      complete: () => {
      },
    });
  }

  /**
   * Store data in localstorage
   */
  onSubmit() {
    this.submitted = true;
    if (this.subscribeForm.valid) {
      const obj: any = {
        email: this.subscribeForm.value.email,
        timeStamp: Date.now(),
      };
      this.success = true;
      const storedData = localStorage.getItem("subscribeList");
      let data: any[] = [];
      if (storedData) {
        data = JSON.parse(storedData);
        if (
          !data.some((item) => item.email === this.subscribeForm.value.email)
        ) {
          data.push(obj);
          localStorage.setItem("subscribeList", JSON.stringify(data));
          this.type = "success";
        } else {
          this.type = "danger";
        }
      } else {
        data.push(obj);
        localStorage.setItem("subscribeList", JSON.stringify(data));
        this.type = "success";
      }
      setTimeout(() => {
        this.success = false;
        this.submitted=false
        this.subscribeForm.reset()
      }, 2000);
    }
  }
}
