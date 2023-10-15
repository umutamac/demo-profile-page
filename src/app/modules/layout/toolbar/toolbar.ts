import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.css']
})
export class Toolbar implements OnInit {
  @Input() accountInfo: { name: string, avatar: string } | undefined = undefined

  ngOnInit(): void {

  }
}
