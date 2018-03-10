import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {
    constructor(private _http: Http) {}
    getPosts() {
        return this._http.get('https://jsonplaceholder.typicode.com/posts').map(response =>  response.json());
    }
    getComments() {
        return this._http.get('https://jsonplaceholder.typicode.com/comments').map(response =>  response.json());
    }
    getUsers() {
        return this._http.get('https://jsonplaceholder.typicode.com/users').map(response =>  response.json());
    }
    getAlbums() {
        return this._http.get('https://jsonplaceholder.typicode.com/albums').map(response =>  response.json());
    }
    getPhotos() {
        return this._http.get('https://jsonplaceholder.typicode.com/photos').map(response =>  response.json());
    }
}
