import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "login",   
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private route:Router) {
    }

    ngOnInit(): void {
    }
    gotocreateaccount(): void{
        this.route.navigate(["/home/createaccount"]);
    }
    gotoforgotpassword(): void{
        this.route.navigate(["/home/forgotpassword"]);
    }
}
