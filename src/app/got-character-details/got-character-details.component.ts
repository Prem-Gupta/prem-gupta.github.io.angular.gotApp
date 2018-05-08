import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-got-character-details',
  templateUrl: './got-character-details.component.html',
  styleUrls: ['./got-character-details.component.css']
})
export class GotCharacterDetailsComponent implements OnInit {

  
  public singleChar: any;
  constructor(private gotService : GotService, private _route:ActivatedRoute, private router: Router) { }

  ngOnInit() {


  let id= this._route.snapshot.paramMap.get('res');
  this.gotService.getSingleCharacterInformation(id).subscribe(
    data => {

        this.singleChar = data;
    },
    error => {
      console.log(error.errorMessage);
    }
    
  )
  }

}
