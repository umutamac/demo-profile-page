import { Component } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.html',
  styleUrls: ['./side-nav.css']
})
export class SideNav {

  logoUrl: string = "https://assets-global.website-files.com/6440819bad63b321ff373435/644082449df5ab2b939848e7_ollang-logo.webp"

  links: { text: string, icon: any, url: string, notifications: number }[] = [
    { text: "My job feed", icon: "", url: "/", notifications: 0 },
    { text: "Discover Jobs", icon: "", url: "/", notifications: 0 },
    { text: "Saved jobs", icon: "", url: "/", notifications: 26 },
    { text: "Proposal", icon: "", url: "/", notifications: 0 },
    { text: "All contacts", icon: "", url: "/", notifications: 4 },
    { text: "Profile", icon: "", url: "/profile", notifications: 0 },
    { text: "Transaction", icon: "", url: "/", notifications: 0 },
    { text: "Reports", icon: "", url: "/", notifications: 0 },
  ]
}
