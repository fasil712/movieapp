import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  isChecked: boolean = false;
  onPressed($event: any) {
    console.log($event, (this.isChecked = false));
    this.isChecked = true;
  }

  colors= [
    {
      id: 1,
      name: 'Green',
    },
    {
      id: 2,
      name: 'Yellow',
    },
    {
      id: 3,
      name: 'Red',
    }
  ];
}
