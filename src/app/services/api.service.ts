import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://localhost:8888/loch/beta/wp-json/wp/v2/posts';


  constructor(private http: HttpClient) {}

  getPosts(){
    return this.http.get(this.API_URL, {});
  }

  getPost(id){
    return this.http.get(`${this.API_URL}/${id}`, {});
  }

}
