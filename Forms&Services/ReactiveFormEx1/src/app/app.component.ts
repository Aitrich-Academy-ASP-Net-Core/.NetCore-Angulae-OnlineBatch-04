import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentForm = this.fb.group({
    name: ['', Validators.required],                 // must not be empty
    email: ['', [Validators.required, Validators.email]], // required & valid email
    age: ['', [Validators.min(18), Validators.max(60)]]   // number between 18 and 60
  });
  constructor(private fb: FormBuilder) {}
  onSubmit():void {
    if (this.studentForm.valid) {
      console.log('Form Submitted:', this.studentForm.value);
      // do something: send to server or show a message
    } else {
      console.log('Form Invalid');
      this.studentForm.markAllAsTouched(); // shows errors
    }
  }

}
