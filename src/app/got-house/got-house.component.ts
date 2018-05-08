import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-got-house',
  templateUrl: './got-house.component.html',
  styleUrls: ['./got-house.component.css']
})
export class GotHouseComponent implements OnInit {
  public singleHouse;
  public allHouses;
  constructor(private gotService : GotService,private router: Router) { }

  ngOnInit() {
    this.allHouses = this.gotService.getAllHouse().subscribe(

      data => {
         this.allHouses = data;
  
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
      
    )
    }


    public detailInformation(house): any {
      let res = (house.url).split("/")[house.url.split("/").length-1]
      this.gotService.getSingleHouseInformation(res).subscribe(
       
        data => {
  
         this.singleHouse = data;
          console.log(this.singleHouse);
          setTimeout(() => {
            this.router.navigate(['/house',res])
         })
        },
  
        error => {
          console.log("some error occured");
          console.log(error.errorMessage)
        }
      )
    }
  

}
