import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {
  constructor(private _http:HttpClient) {
    // this.getTasks();
    // this.getPokemon();
   }
  
  postToServer(num){
    return this._http.post('/tasks', num);
  }

  getTasks(){
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }

  addTask(newtask){
    return this._http.post('/task', newtask)
  }
  // getPokemon(){
  //   let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  //   bulbasaur.subscribe(data => console.log("Got our Pokemon information!", data));
  // }
}
