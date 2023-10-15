import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../shared/data.service";
import { ActivatedRoute } from '@angular/router';

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
  constructor(private list: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route)
    let userId = this.route.snapshot.params['userId'];
    console.log(`userId: ${userId}`)
    this.user = userId === null ? undefined : this.list.getUser(userId)
  }
}
