import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http:HttpClient){}

  name:string = '';
  age:string = '';

  // students must be an array for *ngFor
  students:any[] = [];

  ngOnInit() {
    this.loadStudents();
  }

  // Load all students from json-server
  loadStudents() {
    this.http.get<any[]>('http://localhost:3000/students')
      .subscribe(data => {
        this.students = data;
      });
  }

  addStudent() {
    this.http.post<any>('http://localhost:3000/students',
      { name: this.name, age: this.age })
      .subscribe(stu => {

        // Add new student to list
        this.loadStudents();

        // Clear form
        this.name = '';
        this.age = '';
      });
  }

}
