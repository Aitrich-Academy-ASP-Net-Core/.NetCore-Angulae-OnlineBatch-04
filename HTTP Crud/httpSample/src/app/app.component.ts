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
  editingId: number | null = null;

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
    if (this.editingId == null) {
      // CREATE (POST)
      this.http.post<any>('http://localhost:3000/students',
        { name: this.name, age: this.age })
        .subscribe(stu => {
          this.loadStudents();     // refresh list
          this.clearForm();        // clear inputs
        });
    } else {
      // UPDATE (PUT)
      this.updateStudent(this.editingId, { name: this.name, age: this.age });
    }
  }

  // PUT - update a student by id
  updateStudent(id: number, body: { name: string, age: string }) {
    this.http.put<any>(`http://localhost:3000/students/${id}`, body)
      .subscribe(res => {
        this.loadStudents();     // refresh list after update
        this.clearForm();        // clear and leave edit mode
      });
  }

  // DELETE - remove student by id
  deleteStudent(id: number) {
    this.http.delete<any>(`http://localhost:3000/students/${id}`)
      .subscribe(res => {
        this.loadStudents();     // refresh list after delete
      });
  }

  // small helper: start editing a student -> load into form
  startEdit(student: any) {
    this.editingId = student.id;  // remember which id we are editing
    this.name = student.name;
    this.age = student.age;
  }

  // clear form and cancel editing
  clearForm() {
    this.name = '';
    this.age = '';
    this.editingId = null;
  }

}
