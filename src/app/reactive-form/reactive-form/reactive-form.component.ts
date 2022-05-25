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
      name: [null, [Validators.required, Validators.minLength(4), Validators.pattern(/^\d+$/)]],
      email: [null, Validators.required],
      social: this.fb.group({
        facebook: null,
        alo: null,
      }),
      tel: [null, Validators.required],

    })
  }

  get f() {
    return this.rfContact.controls
  }


  onSubmit() {
    console.log(this.rfContact)
    this.rfContact.reset()
  }
}
