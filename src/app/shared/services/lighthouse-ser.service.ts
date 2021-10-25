import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lighthouse } from '../interface/lighthouse.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LighthouseSerService {
  url: string = "http://localhost:9999/lighthouse"
  constructor(private _http: HttpClient) { }
  //display
  getData(): Observable<Lighthouse[]> {
    return this._http.get<Lighthouse[]>(this.url);
  }
  //insert
  postData(data) {
    return this._http.post(this.url, data);
  }
  //delete
  dData(id) {
    const baseUrl = `${this.url}/${id}`;
    return this._http.delete(baseUrl);
  }

  //getID-Update
  getId(id: Number) {
    const baseUrl = `${this.url}/${id}`;
    return this._http.get<Lighthouse>(baseUrl);
  }

  //update
  update(lh: Lighthouse) {
    const baseUrl = `${this.url}/${lh.id}`;
    return this._http.put(baseUrl, lh);
  }
}
