import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';
import {Location} from '@angular/common';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    constructor(private router:Router, private location:Location, private localeStorage : LocalStorageService) {
        var storage = this.localeStorage.get('loggedUser');
        if(!storage){
            console.log('ennek itt nem kéne');
            this.location.replaceState('/admin/login');
            this.router.navigate(['/admin/login']);
        }
    }

    ngOnInit() {
    }

}
