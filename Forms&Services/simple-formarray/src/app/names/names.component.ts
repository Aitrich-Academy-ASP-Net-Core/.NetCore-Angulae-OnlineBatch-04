import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html'
})
export class NamesComponent {
  // The form has one FormArray called "names"
  form = new FormGroup({
    names: new FormArray([ new FormControl('') ]) // start with one box
  });

  // easy getter for template
  get names(): FormArray {
    return this.form.get('names') as FormArray;
  }

  // Add one empty textbox
  addName(): void {
    this.names.push(new FormControl(''));
  }

  // Remove textbox at index
  removeName(index: number): void {
    this.names.removeAt(index);
  }

  // Submit: show current values
  submit(): void {
    alert('Form value: ' + JSON.stringify(this.form.value));
    console.log(this.form.value);
  }
}
