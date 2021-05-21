import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: "forgotpassword",
    templateUrl: './forgotpassword.component.html',
    styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

    constructor(private route:Router) {
    }
     ngOnInit(): void {
    }
}
