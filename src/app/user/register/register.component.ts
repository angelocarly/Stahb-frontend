import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
  FormControl
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: FormGroup;
  public errorMsg: string;

  get passwordControl(): FormControl {
    return <FormControl>this.user.get('passwordGroup').get('password');
  }

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.user = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.minLength(4)],
        this.serverSideValidateUsername()
      ],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, passwordValidator(8)]],
        confirmPassword: ['', Validators.required]
      }, { validator: comparePasswords })
    });
  }
  

  serverSideValidateUsername(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this.authenticationService
        .checkUserNameAvailability(control.value)
        .pipe(
          map(available => {
            if (available) {
              return null;
            }
            return { userAlreadyExists: true };
          })
        );
    };
  }

  onSubmit() {
    this.authenticationService
      .register(this.user.value.username, this.passwordControl.value)
      .subscribe(
        val => {
          this.router.navigate(['/tabs']);
        },
        (error: HttpErrorResponse) => {
          console.log(error)
          this.errorMsg = `Error ${
            error.status
          } while trying to register user ${this.user.value.username}: ${
            error.error
          }`;
        }
      );
  }
}

function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? { 'passwordTooShort': 
      { requiredLength: length, actualLength: control.value.length } } : null;
  };
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}
