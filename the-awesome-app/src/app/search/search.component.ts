import { Component, OnInit } from '@angular/core';
import {interval, Observable, Subject, BehaviorSubject, ReplaySubject} from 'rxjs';
import {filter, map, take, debounceTime} from 'rxjs/operators';
import {FormGroup, FormControl} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchFormGroup: FormGroup;
  public results: Array<string> = [];

  constructor(private htttClient: HttpClient) {

        // Creates an observable stream where the input is numbers genereated very second 0,1,2,3,4
         const obs =  interval(1000).pipe(
            take(10),
            filter(i => i % 2 ===0 ),
            map(i => i * i)
            
         );
         obs.subscribe((result) => {

            console.log("result: ", result);

         });

         this.searchFormGroup = new FormGroup({
            search: new FormControl("")
         })

         this.subjectDemo();

   }

  ngOnInit(): void {

    const searchFormControl = this.searchFormGroup.get("search");

    searchFormControl?.valueChanges
    .pipe(
      debounceTime(1000)
    )
    .subscribe((value) => {

      console.log(value);
      //Wiki API
      const url = "https://en.wikipedia.org/w/api.php";
      const params = new HttpParams()
                              .set("action", "opensearch")
                              .set("origin", "*")
                              .set("limit", 20)
                              .set("search", value)
      //observe: 'response'
      //observe: 'body'==> default                  
      this.htttClient
                .get(url, {params, observe: 'body'})
                .pipe(
                  //map((data: any) => {return data[1]})
                  map((data:any) => data[1])
                )
                .subscribe((data) => {
                  console.log(data);
                  this.results = data;
                });

    })
  }


  subjectDemo(){

    
    //const subject = new Subject<number>();
    //const subject = new ReplaySubject<number>();
    const subject = new BehaviorSubject<number>(100);

    subject.subscribe((value) => {

      console.log("subject subscriber1", value);
    });

    let x = 5
    const handle = setInterval(() => {

      subject.next(x);
      x = x  + 5;

      if(x === 30){
        clearInterval(handle);
      }

      if(x === 15){
        subject.subscribe((value) => {
          console.log("subject subscriber2", value);
        })
      }

    }, 2000);

    
  }

}
