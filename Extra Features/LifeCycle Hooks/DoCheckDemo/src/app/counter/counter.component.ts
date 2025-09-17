import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements DoCheck{
 count: number = 0;

  increase() {
    this.count++;
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called, current count =', this.count);
  }
}
