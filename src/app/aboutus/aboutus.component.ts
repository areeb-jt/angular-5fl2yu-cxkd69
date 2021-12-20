import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  template: `
<h1>
  About Us
</h1>
<p>We are great!</p>
  `,
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
