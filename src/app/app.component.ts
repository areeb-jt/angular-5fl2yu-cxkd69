import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';
  data = 'code';
  count = 0;
  add(a: number, b: number) {
    return a * b;
  }
  alert(name: any) {
    alert(name);
  }
  getData(val: string) {
    console.log(val);
  }
  counter(operation: string) {
    operation === 'increment' ? this.count++ : this.count--;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
