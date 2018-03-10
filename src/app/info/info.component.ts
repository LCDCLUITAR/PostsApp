import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent{
    private users:any;
    private userSelect:string;
    constructor(private router: Router, activatedRoute: ActivatedRoute, dataService: DataService) {
        this.userSelect = "None";
        dataService.getUsers().subscribe(
            users => this.users = users,
            error => console.error('Error: ' + error),
            () => console.log(this.users)
        );
        activatedRoute.paramMap.subscribe(params => {
            this.userSelect = params.get('id')
        });
        console.log(typeof this.userSelect);
    }
    redirect(userId) {
        this.router.navigate(['./Albums', userId]);
    }
}
