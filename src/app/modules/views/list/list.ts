import { Component } from '@angular/core';
import { DataService } from "../../../shared/data.service";

@Component({
  selector: 'list',
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class List {
  constructor(private list: DataService) { }
  public userShortList: { name: string, link: string }[] = []

  ngOnInit(): void {
    const userSummary = this.list.getUsersSummary()
    this.userShortList = userSummary.map(user => {
      return { name: user.name, link: `${user.id}` }
    });
  }
}
