import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { API_GET_CONTACT } from "src/app/shared/constant/api.constant";
import { CommonServiceService } from "src/app/shared/service/common-service.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  contactFormArray: any[] = [];
  showForm = true;
  contactInfo: any;
  submitted = false;

  /**
   * Contact Form Object
   */
  contactForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    subject: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required]),
  });

  constructor(private commonService: CommonServiceService) {}
  /**
   * Call getContactInfo()
   */
  ngOnInit(): void {
    this.getContactInfo();
  }

  /**
   * Fetch Contact Json
   */
  getContactInfo() {
    this.commonService.getInfo(API_GET_CONTACT).subscribe({
      next: (res) => {
        this.contactInfo = res;
      },
      error: (err: any) => {
      },
      complete: () => {
      },
    });
  }

  /**
   * Submit data in LocalStorage
   */
  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      const data = localStorage.getItem("ContactList");
      if (data) {
        this.contactFormArray = JSON.parse(data);
      }
      this.contactForm.value.id = this.contactFormArray.length
        ? Math.max(...this.contactFormArray.map((s: any) => s.id)) + 1
        : 1;
      this.contactFormArray.push(this.contactForm.value);
      this.showForm = false;
      localStorage.setItem(
        "ContactList",
        JSON.stringify(this.contactFormArray)
      );
    }
  }

  reset() {
    this.contactForm.reset();
    this.submitted = false;
    this.showForm = true;
  }
}
