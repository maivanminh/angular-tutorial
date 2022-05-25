import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  rfContact: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.rfContact = this.fb.group({
      name: [null,  [Validators.required, Validators.minLength(4)]],
      email: [null, [Validators.required, Validators.email]],
      social: this.fb.group({
        facebook: null,
        alo: null,
      }),
      tel: [null, [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10)]],

    })
  }

  onSubmit() {
    console.log(this.rfContact)
    this.rfContact.reset();
  }

  get f() {
    return this.rfContact.controls
  }


}
