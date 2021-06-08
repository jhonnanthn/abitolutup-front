import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestApi {
    headers: HttpHeaders;
    apiUrl = environment.api;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders ({
            'Content-Type':  'application/json',
            'Accept': 'q=0.8;application/json;q=0.9' 
        });
    }

    get<T>(endpoint: string, params?: any): Observable<any> {
        return this.http
            .get<T>(`${this.apiUrl}${endpoint}`, {
                headers: this.headers,
                params
            })
            .pipe(catchError(this.handleError));
    }

    getServiceWithDynamicQueryTerm(url: string, key: string, val: string): Observable<any> {
        return this.http
            .get(url + "/?" + key + "=" + val, {
                headers: this.headers
            })
            .pipe(catchError(this.handleError));
    }
/*
    getServiceWithFixedQueryString(url: string, param: any): Observable<any> {
        this.options = new RequestOptions({ headers: this.headers, search: 'query=' + param });
        return this.http
            .get(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getServiceWithComplexObjectAsQueryString(url: string, param: any): Observable<any> {
        let params: URLSearchParams = new URLSearchParams();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                let val = param[key];
                params.set(key, val);
            }
        }
        this.options = new RequestOptions({ headers: this.headers, search: params });
        return this.http
            .get(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    post(url: string, param: any): Observable<any> {
        let body = JSON.stringify(param);
        return this.http
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    put(url: string, param: any): Observable<any> {
        let body = JSON.stringify(param);
        return this.http
            .put(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    patch(url: string, param: any): Observable<any> {
        let body = JSON.stringify(param);
        return this.http
            .patch(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    delete(url: string, param: any): Observable<any> {
        let params: URLSearchParams = new URLSearchParams();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                let val = param[key];
                params.set(key, val);
            }
        }
        this.options = new RequestOptions({ headers: this.headers, search: params });
        return this.http
            .delete(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteById(url: string, key: string, val: string): Observable<any> {
        return this.http
            .delete(url + "/?" + key + "=" + val, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

*/
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(err: HttpErrorResponse) {

        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {

            errorMessage = `An error occurred: ${err.error.message}`;
        } else {

            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}