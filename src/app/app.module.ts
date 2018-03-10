import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PostComponent } from './post/post.component';
import { InfoComponent } from './info/info.component';
import { AlbumComponent } from './album/album.component';
import { DataService } from './data-service.service';

const routerConfig: Routes = [
  { path: 'Posts', component: PostComponent },
  { path: 'Albums/:id', component: AlbumComponent },
  { path: 'Users/:id', component: InfoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostComponent,
    InfoComponent,
    AlbumComponent
  ],
  imports: [
    HttpModule ,
    BrowserModule,
    RouterModule.forRoot(
      routerConfig,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
