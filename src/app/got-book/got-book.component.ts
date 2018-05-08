import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';
import { error } from 'protractor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-got-book',
  templateUrl: './got-book.component.html',
  styleUrls: ['./got-book.component.css']
})
export class GotBookComponent implements OnInit {
  public allBooks;
  public bookUrl;
  public singleBook;

  constructor(private gotService : GotService,private router:Router) { }

  ngOnInit() {
  this.allBooks = this.gotService.getAllBooks().subscribe(

    data => {
       this.allBooks = data;

    },
    error => {
      console.log("some error occured");
      console.log(error.errorMessage)
    }
    
  )



  
  }
  public detailInformation(bookObj) :any {
    let res = (bookObj.url).split("/")[bookObj.url.split("/").length-1]
    this.gotService.getSingleBookInformation(res).subscribe(
     
      data => {

        this.singleBook = data;
        setTimeout(() => {
          this.router.navigate(['/book',res])
       })
        console.log(this.singleBook)
      },

      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }

}
