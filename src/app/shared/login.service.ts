import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    isUserLoggedIn = false;
    constructor() { }

    isLoggedIn() {
        return of(this.isUserLoggedIn);
    }

    signOut() {
        this.isUserLoggedIn = false;
    }

    register() {

    }

    signIn() {

    }
}