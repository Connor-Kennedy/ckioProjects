import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <div class="alert bg-danger" role="alert" >
        Under Development!
    </div>
  `,
  styles: [
  ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
