import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GotViewComponent } from './got-view/got-view.component';

import { GotService } from './got.service';
import { GotBookComponent } from './got-book/got-book.component';
import { GotCharacterComponent } from './got-character/got-character.component';
import { GotHouseComponent } from './got-house/got-house.component';
import { GotHouseDetailsComponent } from './got-house-details/got-house-details.component';
import { GotCharacterDetailsComponent } from './got-character-details/got-character-details.component';
import { GotBookDetailsComponent } from './got-book-details/got-book-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    GotViewComponent,
    GotBookComponent,
    GotCharacterComponent,
    GotHouseComponent,
    GotHouseDetailsComponent,
    GotCharacterDetailsComponent,
    GotBookDetailsComponent 
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
       {path: 'book', component: GotBookComponent},
       {path:'book/:res',component:GotBookDetailsComponent},
       {path:'', redirectTo:'book',pathMatch:'full'},
       {path :'house', component:GotHouseComponent},
       {path:'house/:res',component:GotHouseDetailsComponent},
       {path :'character',component:GotCharacterComponent},
       {path:'character/:res',component:GotCharacterDetailsComponent},
       {path:'**',component: NotFoundComponent}
    ])
  ],
  providers: [GotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
