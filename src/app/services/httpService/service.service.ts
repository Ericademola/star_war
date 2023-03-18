/**
 *
 * Created By Arokoyu Olalekan Ojo <olalekan.arokoyu@upperlink.ng> @ 30/05/2018
 *
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs-compat/Observable';
import {HttpClient, HttpResponse, HttpParams} from '@angular/common/http';

@Injectable()
export class RestfulHttpService {
  options: any;
  headers_: any = {};
  constructor(private http: HttpClient) {

  }

  /**
   * A Restful Http get request.
   * @param {string} endpoint
   * @param {HttpParams} parameters
   * @returns {Observable<HttpResponse>}
   */
  public get(endpoint: string, parameters?: HttpParams): Observable<any> {

    if (parameters) {
      this.options = { params: parameters, headers: this.headers_ };
    } else {
      this.options = { headers: this.headers_ };
    }
    return this.http.get(endpoint, this.options);
  }


  /**
   * A Restful Http post request.
   * @param {string} endpoint
   * @param data
   * @returns {Observable<HttpResponse>}
   */
  public post(endpoint: string, data: any): Observable<any> {
    return this.http.post(endpoint, data, {  headers: this.headers_ });
  }


  /**
   * A Restful Http delete Request.
   * @param {string} endpoint
   * @param data
   * @returns {Observable<HttpResponse>}
   */
  public delete(endpoint: string , data: any): Observable<any> {
    const params = new HttpParams(data);
    return this.http.delete(endpoint, {headers: this.headers_, params: params});

  }


  /**
   * A Restful Http put request.
   * @param {string} endpoint
   * @param data
   * @returns {Observable<HttpResponse>}
   */
  public put(endpoint: string, data: any): Observable<any> {
    return this.http.put(endpoint, data, {  headers: this.headers_ });
  }


  /**
   * A Restful Http patch request
   * @param {string} endpoint
   * @param data
   * @returns {Observable<HttpResponse>}
   */
  public patch(endpoint: string, data: any): Observable<any> {
    return this.http.patch(endpoint, data, {  headers: this.headers_ });
  }
}
