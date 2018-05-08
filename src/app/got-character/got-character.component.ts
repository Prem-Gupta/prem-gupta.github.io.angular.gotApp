import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';
import { error } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-got-character',
  templateUrl: './got-character.component.html',
  styleUrls: ['./got-character.component.css']
})
export class GotCharacterComponent implements OnInit {

 public  singleChar: any;
   public allCharacters;
  constructor(private gotService : GotService,private router: Router) { }

  ngOnInit() {
    this.allCharacters = this.gotService.getAllCharacter().subscribe(

      data => {
         this.allCharacters = data;
  
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
      
    )
    }

    public detailInformation(charObj): any {
      let res = (charObj.url).split("/")[charObj.url.split("/").length-1]
      this.gotService.getSingleCharacterInformation(res).subscribe(
       
        data => {
  
          this.singleChar = data;
          console.log(this.singleChar);
          setTimeout(() => {
            this.router.navigate(['/character',res])
         })
        },
  
        error => {
          console.log("some error occured");
          console.log(error.errorMessage)
        }
      )
    }
  

}
