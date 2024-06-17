import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contactList:any[]=[]
  contactId: any
  showPopup=false
  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }
  contact:any
  ngOnInit(): void {
    
    this.contactList = this.localStorage,
      this.activatedRoute.params.subscribe({
        next: (res: any) => {
          if (res) {
            this.contactId = res.id
          }
        },
      })
    const contact = this.contactList.findIndex((f: any) => f.id == this.contactId);
    this.contact=this.contactList[contact]
    console.log(this.contact);
    this.showPopup=true
    

  }
  get localStorage() {
    const data = localStorage.getItem("ContactList")
    if (data) {
      return JSON.parse(data)
    }
  }

}
