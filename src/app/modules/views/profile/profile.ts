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

type Tab = "experience" | "bio" | "skills" | "portfolio"
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

  currentTab: Tab = "experience"

  setTab(tab: Tab) {
    this.currentTab = tab
  }

  tabButtons: { text: string, value: Tab }[] = [
    { text: "Experience", value: "experience" },
    { text: "Biography", value: "bio" },
    { text: "Skills", value: "skills" },
    { text: "Portfolio", value: "portfolio" }
  ]
}
