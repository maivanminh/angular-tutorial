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
      name: new FormControl(null,  Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      social: new FormGroup({
        facebook: new FormControl(null,  Validators.required),
        alo: new FormControl(null,  Validators.required),
      }),
      tel: new FormControl(null,  Validators.required),

    })
  }

  onSubmit() {
    console.log(this.rfContact.value)
  }

}
