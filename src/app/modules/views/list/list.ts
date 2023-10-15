import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../shared/data.service";

@Component({
  selector: 'list',
  templateUrl: './list.html',
  styleUrls: [/*'./list.css'*/]
})
export class List implements OnInit {
  public userSummary: { name: string, link: string }[] = []
  constructor(private list: DataService) { }

  ngOnInit(): void {
    this.userSummary = this.list.getUsersSummary().map(user => {
      return { name: user.name, link: `/profile/${user.id}` }
    });
  }
}
