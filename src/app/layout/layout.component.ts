import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
    constructor(private loginSvc: LoginService,
        private router: Router) {

    }

    ngOnInit(): void {
        this.loginSvc.isLoggedIn().subscribe(response => {
            if (response) {
                this.router.navigate(['home']);
            }else{
                this.router.navigate(['account/login']);
            }
        })
    }
}
