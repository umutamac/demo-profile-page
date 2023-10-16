import { Component } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.html',
  styleUrls: [/*'./side-nav.css'*/]
})
export class SideNav {

  logoUrl: string = "https://assets-global.website-files.com/6440819bad63b321ff373435/644082449df5ab2b939848e7_ollang-logo.webp"

  links: { text: string, icon: any, url: string, notifications: number, activeOnExactMatch: boolean }[] = [
    { text: "My job feed", icon: "fa fa-solid fa-briefcase", url: "/", notifications: 0, activeOnExactMatch: true },
    { text: "Discover Jobs", icon: "fa fa-regular fa-eye", url: "/", notifications: 0, activeOnExactMatch: true },
    { text: "Saved jobs", icon: "fa fa-regular fa-bookmark", url: "/", notifications: 26, activeOnExactMatch: true },
    { text: "Proposal", icon: "fa fa-regular fa-envelope", url: "/", notifications: 0, activeOnExactMatch: true },
    { text: "All contacts", icon: "fa fa-regular fa-file", url: "/", notifications: 4, activeOnExactMatch: true },
    { text: "Profile", icon: "fa fa-solid fa-user", url: "/profile", notifications: 0, activeOnExactMatch: false },
    { text: "Transaction", icon: "fa fa-solid fa-money-bill", url: "/", notifications: 0, activeOnExactMatch: true },
    { text: "Reports", icon: "fa fa-regular fa-file", url: "/", notifications: 0, activeOnExactMatch: true },
  ]
}
//<i class="fa-solid fa-eye"></i>