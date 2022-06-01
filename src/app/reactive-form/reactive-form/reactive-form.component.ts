import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  rfContact: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfContact = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: [null, [Validators.required, Validators.email]],
      social: this.fb.group({
        facebook: null,
        alo: null,
      }),
      age: [null, [Validators.required, Validators.min(18)]],
      size: [null],

    })
  }

  get f() {
    return this.rfContact.controls
  }

  options: [
    {id: 1, name: 'minh'},
    {id: 2, name: 'thong'},
    {id: 3, name: 'anh'},
  ]

  onSubmit() {
    console.log(this.rfContact.value)
    this.rfContact.reset()
  }

  resetForm () {
    this.rfContact.reset()
  }
}
