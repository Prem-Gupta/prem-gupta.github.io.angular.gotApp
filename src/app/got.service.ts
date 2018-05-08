import { Injectable } from '@angular/core';


import {HttpClient, HttpErrorResponse} from '@angular/common/http';

// import observable related code.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class GotService {

  public baseBookUrl = 'https://anapioficeandfire.com/api/books/';
  public baseHouseUrl ='https://anapioficeandfire.com/api/houses/';
  public baseCharacterUrl ='https://anapioficeandfire.com/api/characters/';
  constructor(private _http : HttpClient) { }

  public getAllBooks() : any {

    let myResponse = this._http.get(this.baseBookUrl);
    console.log(myResponse);
    return myResponse;
    
   }


   public getAllHouse() : any {

    let myResponse = this._http.get(this.baseHouseUrl);
    console.log(myResponse);
    return myResponse;
    
   }


   public getAllCharacter() : any {

    let myResponse = this._http.get(this.baseCharacterUrl);
    console.log(myResponse);
    return myResponse;
    
   }

   public getSingleBookInformation(url) : any {
     let myResponse = this._http.get(this.baseBookUrl  + url);
     return myResponse;
   }

   public getSingleCharacterInformation(url) :any{
    
    let myResponse = this._http.get(this.baseCharacterUrl + url);
    return myResponse;
   }

   public getSingleHouseInformation(url): any{

    let myResponse = this._http.get(this.baseHouseUrl + url);
    return myResponse;

   }

}
