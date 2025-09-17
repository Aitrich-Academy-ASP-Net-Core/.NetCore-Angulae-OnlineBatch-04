import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements AfterViewChecked {
  counter: number = 0;

  increase() {
    this.counter++;
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked called, counter =', this.counter);
  }
}
