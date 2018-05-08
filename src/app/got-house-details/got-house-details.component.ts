import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-got-house-details',
  templateUrl: './got-house-details.component.html',
  styleUrls: ['./got-house-details.component.css']
})
export class GotHouseDetailsComponent implements OnInit {

  singleHouse: any;
  constructor(private gotService : GotService, private _route:ActivatedRoute, private router: Router) { }

  ngOnInit() {

    let id= this._route.snapshot.paramMap.get('res');
    this.gotService.getSingleHouseInformation(id).subscribe(
      data => {
  
          this.singleHouse = data;
          console.log(this.singleHouse);
      },
      error => {
        console.log(error.errorMessage);
      }
      
    )
  }

}
