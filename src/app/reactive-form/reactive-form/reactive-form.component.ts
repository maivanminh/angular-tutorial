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
<<<<<<< HEAD
      name: new FormControl('', [Validators.required,  Validators.minLength(5), Validators.maxLength(10)]),
      email: new FormControl(),
=======
      name: new FormControl(null,  Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
>>>>>>> 91dc3022a6cda4d8ad522aa070d57bb990f1c4da
      social: new FormGroup({
        facebook: new FormControl(null,  Validators.required),
        alo: new FormControl(null,  Validators.required),
      }),
      tel: new FormControl(null,  Validators.required),

    })
  }

  onSubmit() {
    console.log(this.rfContact)
  }

}
