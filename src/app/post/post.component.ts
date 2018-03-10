import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
    private posts:any;
    private users:any;
    private comments:any;
    private showComments:boolean;
    constructor(private router: Router, dataService: DataService) {
        this.showComments = false;
        dataService.getUsers().subscribe(
            users => this.users = users,
            error => console.error('Error: ' + error),
            () => console.log(this.users)
        );
        dataService.getPosts().subscribe(
            posts => this.posts = posts,
            error => console.error('Error: ' + error),
            () => console.log(this.posts)
        );
        dataService.getComments().subscribe(
            comments => {
                this.comments = comments
                for(let i = 0; i < this.comments.length; i++){
                    let x = this.posts.findIndex(o => o.id == this.comments[i].postId);
                    if(x == -1){continue;}
                    if(typeof this.posts[x]["comments"] === 'undefined'){
                        this.posts[x]["comments"] = [];
                    }
                    this.posts[x]["comments"].push(this.comments[i]);
                }
            },
            error => console.error('Error: ' + error),
            () => console.log(this.comments)
        );
    }
    getUser(userId:string){
        if(this.users){
            let x = this.users.filter(o => o.id == userId)
            return x[0];
        }
        else {
            return '';
        }
    }
    redirect(userId, goTo) {
        let x = "./" + goTo;
        this.router.navigate([x, userId]);
    }
}
