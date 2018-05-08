import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-got-book-details',
  templateUrl: './got-book-details.component.html',
  styleUrls: ['./got-book-details.component.css']
})
export class GotBookDetailsComponent implements OnInit {

  public singleBook;
  constructor( private gotService : GotService ,private _route : ActivatedRoute,private router:Router , private _http :HttpClient) { }

  ngOnInit() {

  let id= this._route.snapshot.paramMap.get('res');
  this.gotService.getSingleBookInformation(id).subscribe(
    data => {

        this.singleBook = data;
    },
    error => {
      console.log(error.errorMessage);
    }
    
  )

  }

}
