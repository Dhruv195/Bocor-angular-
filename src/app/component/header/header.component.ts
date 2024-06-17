import {
  Component,
  ComponentFactoryResolver,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { API_GET_HEADER } from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  headerInfo: any;
  activeSection: string = "";
  userContactList: any[] = [];
  show=false;
  constructor(private commonService: CommonServiceService) {}

  /**
   * call section variable anf contact-list
   */
  ngOnInit(): void {
    this.getHeaderInfo();
    this.commonService.sectionChange.subscribe((sectionId) => {
      this.activeSection = sectionId;
    });
    this.userContactList = this.getLocalStorage("ContactList");
  }

  /**
   *
   * @param local get data from localstorage
   * @returns list of contact
   */
  getLocalStorage(local: any) {
    let localStorageData = localStorage.getItem(local);
    if (localStorageData) {
      let list = JSON.parse(localStorageData);
      list = list.slice(-3);
      return list;
    }
  }

  /**
   * Fetch Header JSon
   */
  getHeaderInfo() {
    this.commonService.getInfo(API_GET_HEADER).subscribe({
      next: (res) => {
        this.headerInfo = res;
      },
      error: (err: any) => {
        console.error("Error:", err);
      },
      complete: () => {},
    });
  }

  /**
   *
   * @param section section active parameter
   * @returns sectionId
   */
  isActive(section: string): boolean {
    return this.activeSection === section;
  }

  /**
   *
   * @param path set path to section subject variable
   * @param event stop the parent event
   */
  scrollTo(path: string, event: Event): void {
    event.preventDefault();
    this.commonService.sectionChange.next(path.substring(1));
  }
}
