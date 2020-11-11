import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { rejects } from 'assert';
import { promise } from 'protractor';
import { LoginService } from '../login.service';

export class user {
    isAuthenticated: boolean;
}

@Injectable()

export class AuthResolver implements Resolve<any>{
    constructor(private logSvc: LoginService) {

    }
    resolve() {
        return new Promise<any>((resolve, rejects) => {
            this.logSvc.isLoggedIn().subscribe(res => {
                if (res) {
                    resolve({
                        isAuthenticated: true
                    })
                } else {
                    rejects({
                        isAuthenticated: false
                    });
                }
            }, (err) => {
                rejects(err)
            })
        })
    }
}