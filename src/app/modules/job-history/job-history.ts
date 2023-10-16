import { Component } from '@angular/core';


@Component({
  selector: 'job-history',
  templateUrl: './job-history.html',
  styleUrls: []
})
export class JobHistory  {
  jobHistory = [{
    role: "Graphic Designer",
    company: {
      name: "Dribble Inc.",
      image: "https://cdn.freebiesupply.com/logos/large/2x/dribbble-icon-1-logo-png-transparent.png",
    },
    start: "Feb 2016",
    end: "Dec 2017",
    location: "New York, USA",
    summary: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, fugiat
    exercitationem. At doloribus deleniti, fuga deserunt expedita totam. Nemo a, veniam esse facilis
    perspiciatis incidunt quos inventore alias delectus itaque.`,
    images: [
      { src: "https://i.insider.com/6340783eb3e94d0019781b4e?width=700", alt: "stock image" },
      { src: "https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg", alt: "stock image" }
    ]
  }]
}
