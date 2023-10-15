import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../shared/data.service";

type User = {
  createdAt: string//date
  name: string
  avatar: string//url
  country: string
  state: string
  yearsOfExperience: number
  certificateCount: number,
  numberOfInternships: number,
  summary: string
  id: string
}
@Component({
  selector: 'profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile implements OnInit {
  public user: User | undefined = undefined
  constructor(private list: DataService) { }

  ngOnInit(): void {
    this.user = this.list.getUser("1");// get id from route parameter
  }
}
