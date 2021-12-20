import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  template: `
    <p>
      country works!
    </p>
  `,
  styles: [
    `p{
      color:hotpink
    }`,
  ],
})
export class CountryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
