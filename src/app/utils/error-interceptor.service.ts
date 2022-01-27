import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req, next)
    return next.handle(req).pipe(
      map(res => {
        return res;
      }),
      catchError((error: HttpErrorResponse) => {
        let message = '';
        if (error.error instanceof ErrorEvent) {
          message = `Error code: ${error.error.message}`;
        } else {
          message = `Error code: ${error.status}`;
        }
        console.log(message)
        return throwError(message)
      })
    );
  }
}
