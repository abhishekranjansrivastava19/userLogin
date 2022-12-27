import { Injectable } from '@angular/core';
const TOKEN = 'jwtToken';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageServiceService {
  setToken(data: string) {
    localStorage.setItem(TOKEN, data);
  }

  getToken():any {
     localStorage.getItem(TOKEN);
  }

  removeToken() {
    localStorage.removeItem(TOKEN);
  }

}
