import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  rfContact: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.rfContact = new FormGroup({
      name: new FormControl('', [Validators.required,  Validators.minLength(5), Validators.maxLength(10)]),
      email: new FormControl(),
      social: new FormGroup({
        facebook: new FormControl(),
        alo: new FormControl(),
      }),
      tel: new FormControl(),

    })
  }

  onSubmit() {
    console.log(this.rfContact)
  }

}
