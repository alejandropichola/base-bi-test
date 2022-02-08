import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '@/app/interfaces/user';
import { Observable } from 'rxjs';
import { environment } from '@/environments/environment';
import { ResponseInterface } from '@/app/interfaces/response';

@Injectable({providedIn:'root'})
export class UserServices {
  constructor(private http: HttpClient) {}

  createUser(user: UserInterface): Observable<ResponseInterface<Object>> {
    return this.http.post<ResponseInterface<Object>>(
      `${environment.env.hostURL}/api/persons`,
      user
    );
  }
}
