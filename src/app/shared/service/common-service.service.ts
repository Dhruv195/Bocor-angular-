import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommonServiceService {
  /**
   * subject variable to change the section
   */
  sectionChange = new Subject<string>();


  constructor(private http: HttpClient) {}

  /**
   * 
   * @param url Fetch all api using single URL
   * @returns the info form json file 
   */
  getInfo(url: any): Observable<any> {
    return this.http.get<any>(url);
  }
}
