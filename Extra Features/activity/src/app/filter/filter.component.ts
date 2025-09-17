import { Component,OnInit,Input,Output,EventEmitter} from '@angular/core';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent 
{
  ngOnInit():void
  {

  }
@Input() all:number=0;
@Input() free:number=0;
@Input() premium:number=0;
data:string="You have nice collection of Books!!!!!";
@Output() message=new EventEmitter<string>; 
notify():void{
this.message.emit(this.data);
}
}
