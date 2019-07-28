import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private url = 'https://jsonplaceholder.typicode.com/';
  private comment = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  public fetch(params: any = {}): any {
    return this.http.get<Array<any>>(`${this.url}users`, params);
  }

  public getUsersId(id) {
    return this.http.get(`${this.comment}/${id}`);
  }

}
