import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
    private users:any;
    private albums:any;
    private photos:any;
    private userSelect:string;
    private isModalOpen:boolean;
    private selectedAlbum:any;
    constructor(activatedRoute: ActivatedRoute, dataService: DataService) {
        this.isModalOpen = false;
        dataService.getUsers().subscribe(
            users => this.users = users,
            error => console.error('Error: ' + error),
            () => console.log(this.users)
        );
        dataService.getAlbums().subscribe(
            albums => this.albums = albums,
            error => console.error('Error: ' + error),
            () => console.log(this.albums)
        );
        dataService.getPhotos().subscribe(
            photos => {
                this.photos = photos
                for(let i = 0; i < this.photos.length; i++){
                    let x = this.albums.findIndex(o => o.id == this.photos[i].albumId);
                    if(x == -1){continue;}
                    if(typeof this.albums[x]["photos"] === 'undefined'){
                        this.albums[x]["photos"] = [];
                    }
                    this.albums[x]["photos"].push(this.photos[i]);
                }
            },
            error => console.error('Error: ' + error),
            () => console.log(this.photos)
        );
        activatedRoute.paramMap.subscribe(params => {
            this.userSelect = params.get('id')
        });
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
    openModal(album){
        this.selectedAlbum = album;
        this.isModalOpen = true;
        console.log(album);
    }
}
