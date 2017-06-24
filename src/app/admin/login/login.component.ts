import {Component, OnInit,NgZone} from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {Router , ActivatedRoute} from  '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form = {
        name : 'krisz',
        password : 'jelszó'
    };

    constructor(private localeStorage : LocalStorageService, private router : Router, private location: Location,private zone:NgZone, private route : ActivatedRoute) {
        var storage = this.localeStorage.get('loggedUser');
        if(storage){
            console.log('storage',storage);
            console.log('before redirect');
            //this.location.replaceState('/admin');
            this.router.navigate(["/admin"]);
            console.log('after redirect');
        }
    }

    ngOnInit() {

    }

    public onSubmit(login):void{
        if(login.password.length>5 && login.name.length>1){
            this.localeStorage.set('loggedUser',login.name);
            this.location.replaceState('/admin');
            this.router.navigate(['/admin']);
        }
    }

}
