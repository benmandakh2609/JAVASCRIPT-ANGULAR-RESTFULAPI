import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { importType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'ben';
  tasks = [];

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getTasksFromService()
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data;
    }) 
  }
  onButtonClick(): void { 
    console.log(`Click event is working`);
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data;
    })
  }
  // onButtonClickParam(num: Number): void { 
  //   console.log(`Click event is working with num param: ${num}`);
  //   let observable = this._httpService.postToServer({data:num});
  //   observable.subscribe(data => console.log("Got our data!", data));
  // }
  // onButtonClickParams(num: Number, str: String): void { 
  //   console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  // }
  // onButtonClickEvent(event: any): void { 
  //   console.log(`Click event is working with event: ${event}`);
  // }

  /////////////////
  // snacks: string[];
  // loggedIn: boolean;
  // /////////////////
  // num: number;
  // randNum: number;
  // str: string;
  // first_name: string;

  // ngOnInit(){
  //   ///////////////
  //   this.snacks = ["vanella latte with skim milk", "brushed suede", "cookie", "orio"];
  //   this.loggedIn = true;
  //   //////////////
  //   this.num = 7;
  //   this.randNum = Math.floor((Math.random() * 2) + 1);
  //   this.str = " Hello Angular Visitor! ";
  //   this.first_name = "Alpha";
  // }
}
