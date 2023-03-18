import {Injectable} from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import 'rxjs-compat/observable/throw';
import {RestfulHttpService} from '../httpService/service.service';
import {HttpClient, HttpParams} from '@angular/common/http';

import { environment as env } from '../../../environments/environment';
/**
 *
 * Service to handle all api calls to api backend
 */
@Injectable()
export class ApiService extends RestfulHttpService {
  constructor(http: HttpClient) {
    super(http);
  }

  //
  // /**
  //  *
  //  * @param {string} api
  //  * @param {string} method
  //  * @param data
  //  * @returns {Observable<any>}
  //  */
  // deleteRequest(api: string, method: string, data?: any): Observable<any> {
  //   let ENDPOINT;
  //   if (method) {
  //     ENDPOINT = env.API_URL + '/' + env.API_VERSION + '/' + api + '/' + method;
  //   } else {
  //     ENDPOINT = env.API_URL + '/' + env.API_VERSION + '/' + api;
  //   }
  //   return super.delete(ENDPOINT, data).retryWhen(error => {
  //     return error.mergeMap((err) => this.errorHandler(err))
  //       .delay(1000)
  //       .take(2);
  //   }).catch(this.errorHandler).map(res => {
  //     return res;
  //   });
  // }
  //
  //
  // /**
  //  *
  //  * @param {string} api
  //  * @param {string} method
  //  * @param data
  //  * @returns {Observable<any>}
  //  */
  // putRequest(api: string, method: string, data: any): Observable<any> {
  //   let ENDPOINT;
  //   if (!isNullOrUndefined(method)) {
  //     ENDPOINT = env.API_URL + '/' + env.API_VERSION + '/' + api + '/' + method;
  //   } else {
  //     ENDPOINT = env.API_URL + '/' + env.API_VERSION + '/' + api;
  //   }
  //   return super.put(ENDPOINT, data).retryWhen(error => {
  //     return error.mergeMap((err) => this.errorHandler(err))
  //       .delay(1000)
  //       .take(2);
  //   }).catch(this.errorHandler).map(res => {
  //     return res;
  //   });
  //
  // }
  //
  //
  // /**
  //  *
  //  * @param {string} api
  //  * @param {string} method
  //  * @param data
  //  * @returns {Observable<any>}
  //  */
  // patchRequest(api: string, method: string, data: any): Observable<any> {
  //   let ENDPOINT;
  //   if (!isNullOrUndefined(method)) {
  //     ENDPOINT = env.API_URL + '/' + env.API_VERSION + '/' + api + '/' + method;
  //   } else {
  //     ENDPOINT = env.API_URL + '/' + env.API_VERSION + '/' + api;
  //   }
  //   return super.patch(ENDPOINT, data).retryWhen(error => {
  //     return error.mergeMap((err) => this.errorHandler(err))
  //       .delay(1000)
  //       .take(2);
  //   }).catch(this.errorHandler).map(res => {
  //     return res;
  //   });
  // }

  // public handleError(e, i) {
  //   console.log('Error', e, i);
  // }

  /**
   *
   * @param {string} api
   * @param {string} method
   * @param {HttpParams} params
   * @returns {Observable<any>}
   */
  getRequest(api: string, method?: string | null, params?: HttpParams): Observable<any> {
    let ENDPOINT;
    if (method) {
      ENDPOINT = env.API_URL + '/' + api + '/' + method;
    } else {
      ENDPOINT = env.API_URL + '/' + api;
    }
    return super.get(ENDPOINT, params).pipe(tap(error => {
      return error
    })).pipe(map((res: any) => {
      return res;
    }));
  }


  /**
   *
   * @param {string} api
   * @param {string} method
   * @param data
   * @returns {Observable<any>}
  //  */
  // postRequest(api: string, method: string, data: any): Observable<any> {
  //   let ENDPOINT;
  //   if (!isNullOrUndefined(method)) {
  //     ENDPOINT = env.API_URL + '/' + env.API_VERSION + '/' + api + '/' + method;
  //   } else {
  //     ENDPOINT = env.API_URL + '/' + env.API_VERSION + '/' + api;
  //   }
  //   return super.post(ENDPOINT, data).retryWhen(error => {
  //     return error.mergeMap((err) => this.errorHandler(err))
  //       .delay(1000)
  //       .take(2);
  //   }).catch(this.errorHandler).map(res => this.decode(res, method));
  //
  // }
}
