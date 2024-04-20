import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'httpbin.org/';

  constructor(private http: HttpClient) { }

 getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
