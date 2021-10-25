import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interface/course.model';
import { Enroll } from '../interface/enroll.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollSerService {

  url: string = "http://localhost:9999/enrollment";

  url2: string = "http://localhost:9999/courses";
  url3: string = "http://localhost:9999/lighthouse";

  constructor(private _http: HttpClient) { }

  //get / display
  getData(): Observable<Enroll[]> {
    return this._http.get<Enroll[]>(this.url);
  }
  //delete
  dData(id) {
    const baseUrl = `${this.url}/${id}`;
    return this._http.delete(baseUrl);
  }

  //getCourse
  getCourses(): Observable<Course[]> {
    return this._http.get<Course[]>(this.url2);
  }

  //insert
  postData(data) {
    return this._http.post(this.url, data);
  }

  //getId
  getId(id: number) {
    const baseUrl = `${this.url}/${id}`;
    return this._http.get<Enroll>(baseUrl);
  }

  //update
  update(en: Enroll) {
    const baseUrl = `${this.url}/${en.id}`;
    return this._http.put(baseUrl, en);
  }

}
