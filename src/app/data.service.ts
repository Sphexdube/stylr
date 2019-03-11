import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string;
  httpOptions: HttpHeaders;

  data: any[] =  [];

  constructor(private http: HttpClient) {

    this.baseUrl = 'https://4pdmal789f.execute-api.eu-west-1.amazonaws.com/Prod/api/';
    // this.httpOptions = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': '*'});


   }

  // public getItems() {
  //  return this.http.get<any>(`${this.baseUrl}test/database`, { headers: this.httpOptions });
  // }

  public getItems() {
    return this.http.get('./assets/static/file.json');
  }
}
