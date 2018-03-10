import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
    currLink: string;
    constructor(private router: Router) {
        this.currLink = "Posts";
        router.events.subscribe((val) => {
            this.currLink = this.router.url.split('/')[1]
        });
    }
}
