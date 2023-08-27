import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CenterLayoutComponent } from 'src/app/layouts/center-layout/center-layout.component';
import { ErrorMessagePipe } from './utils/ErrorMessagePipe';

@Component({
  standalone: true,
  selector: 'app-intro-signup-form',
  templateUrl: './intro-signup-form.component.html',
  styleUrls: ['./intro-signup-form.component.scss'],
  imports: [CenterLayoutComponent, ReactiveFormsModule, CommonModule, ErrorMessagePipe]
})
export class IntroSignupFormComponent {

  ValidateForm!: FormGroup

  formFields = [
    { name: 'firstName', placeholder: 'First Name', type: 'text', },
    { name: 'lastName', placeholder: 'Last Name', type: 'text' },
    { name: 'email', placeholder: 'Email', type: 'email' },
    { name: 'password', placeholder: 'Password', type: 'password' },
  ]

  constructor(private fb: FormBuilder) {

    this.ValidateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    })
  }

  onSubmit() {
    console.log(this.ValidateForm)
    this.ValidateForm.valid && alert(JSON.stringify(this.ValidateForm.value))
  }

}
