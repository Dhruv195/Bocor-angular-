import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscriber-list.component.html',
  styleUrls: ['./subscriber-list.component.scss']
})
export class SubscriberListComponent implements OnInit{

  subscriberList:any
  
  ngOnInit(): void {
    
    this.subscriberList = this.localStorage
  }
  get localStorage() {
    const data = localStorage.getItem("subscribeList")
    if (data) {
      return JSON.parse(data)
    }
  }
}
