import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  getWelcomeMessage() {
    return "Welcome to Angular!";
  }
}
