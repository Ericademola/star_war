import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api/api.service.";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  public allPeople: any = [];
  public clickedPerson: any = null;
  public nextNumber = null;
  public prevNumber = null;
  private count = 1;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getPeople(1);
  }

  public getAPerson() {
    this.api.getRequest('people', "1").subscribe((data) => {
      console.log('RES', data);
    }, (err) => {
      console.log('Err', err);
    })
  }

  public getPeople(page: number = this.count) {
    this.api.getRequest(`people/?limit=10&&page=${page}`).subscribe((data) => {
      const baseURL = "https://www.w3schools.com/bootstrap5/";
      this.allPeople = data.results.map((person: any)=> ({...person, image: person.gender === "male" ? `${baseURL}img_avatar1.png` : `${baseURL}img_avatar5.png`})).slice(0, 9);
      console.log('All', this.allPeople, data);
      if(data.next) {
        this.nextNumber = data.next.split("page=")[1];
      }
      if(data.previous) {
        this.prevNumber = data.previous.split("page=")[1];
      }
      if(!data.next) {
        this.nextNumber = null;
      }
      if(!data.previous) {
        this.prevNumber = null;
      }
    }, (err) => {
      console.log('Err', err);
    })
  }

  public openDetailsModal(person: any) {
    console.log('Person', person);
    this.clickedPerson = person;
  }

  public closeModal() {
    this.clickedPerson = null;
  }

  public getNext(type: string) {
    if(type  === "next") {
      console.log('Next', this.nextNumber);
      this.count = this.nextNumber ?? 1;
      this.getPeople(this.count);
    } else {
      this.count = this.prevNumber ?? 1;
      this.getPeople(this.count);
    }
  }

}
