import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { LocalstorageServiceService } from './localstorage-service.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient, private token: LocalstorageServiceService, private router: Router) { }
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/api/v1/users/login`,{email ,password});
  }

  logout() {
    this.token.removeToken();
    this.router.navigate(['/login']);
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/v1/users/login');
  }

  signup(user: User):Observable<any>{
    return this.http.post('http://localhost:3000/api/v1/users/register', user);
  }
 
}