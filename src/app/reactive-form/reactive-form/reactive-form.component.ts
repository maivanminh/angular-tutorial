import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  rfContact: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.rfContact = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.pattern(/^\d+$/)]),
      email: new FormControl(null, Validators.required),
      social: new FormGroup({
        facebook: new FormControl(),
        alo: new FormControl(),
      }),
      tel: new FormControl(null, Validators.required),

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
