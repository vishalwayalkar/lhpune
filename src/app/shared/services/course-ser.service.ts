import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interface/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseSerService {
  url: string = "http://localhost:9999/courses";
  constructor(private _http: HttpClient) { }
  //display
  getData(): Observable<Course[]> {
    return this._http.get<Course[]>(this.url);
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
    return this._http.get<Course>(baseUrl);
  }

  //update
  update(crs: Course) {
    const baseUrl = `${this.url}/${crs.id}`;
    return this._http.put(baseUrl, crs);
  }



}
