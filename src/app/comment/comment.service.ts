import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IZComments } from './constant';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(){
    return this.http.get<IZComments[]>(
      'https://jsonplaceholder.typicode.com/commes'
    );
  }
}
