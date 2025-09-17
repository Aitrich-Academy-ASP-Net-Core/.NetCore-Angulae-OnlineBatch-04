import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    console.log('AfterContentInit: Content has been projected!');
  }
}
