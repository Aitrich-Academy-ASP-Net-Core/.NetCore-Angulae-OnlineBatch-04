import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
   @Input() name: string = '';
  changeLog: string = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called:', changes);
    this.changeLog = `Old: ${changes['name']?.previousValue}, New: ${changes['name']?.currentValue}`;
  }

}
