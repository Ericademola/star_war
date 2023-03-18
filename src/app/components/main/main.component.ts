import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api/api.service.";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public allPeople: any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  public getAPerson() {
    this.api.getRequest('people', "1").subscribe((data) => {
      console.log('RES', data);
    }, (err) => {
      console.log('Err', err);
    })
  }

  public getPeople() {
    this.api.getRequest('people').subscribe((data) => {
      const baseURL = "https://www.w3schools.com/bootstrap5/";
      this.allPeople = data.results.map((person: any)=> ({...person, image: person.gender === "male" ? `${baseURL}img_avatar1.png` : `${baseURL}img_avatar5.png`}));
      console.log('All', this.allPeople, data);
    }, (err) => {
      console.log('Err', err);
    })
  }

}
