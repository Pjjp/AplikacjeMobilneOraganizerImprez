import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RestApiService } from 'src/app/rest-api.service'
import { AuthService } from 'src/app/auth.service'


@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent implements OnInit {

  form: FormGroup;

  type: 'login' | 'signup' | 'reset' = 'signup';
  loading = false;

  serverMessage: string;
  errors: any = [];

  constructor(private fb: FormBuilder, 
    private service: RestApiService,
    private authservice: AuthService,
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      password: [
        '',
        [Validators.minLength(6), Validators.required]
      ],
      passwordConfirm: ['', []],
      username: ['', []],
      email: ['', [Validators.required, Validators.email]],
      description: ['', []],
      age: ['', []],
      sex: ['', []],
      avatar: ['', []],
      location: ['', []],
    });
  }

  changeType(val) {
    this.type = val;
  }

  get isLogin() {
    return this.type === 'login';
  }

  get isSignup() {
    return this.type === 'signup';
  }

  get isPasswordReset() {
    return this.type === 'reset';
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  get passwordDoesMatch() {
    if (this.type !== 'signup') {
      return true;
    } else {
      return this.password.value === this.passwordConfirm.value;
    }
  }

  get username() {
    return this.form.get('username');
  }

  get description() {
    return this.form.get('description');
  }

  get age() {
    return this.form.get('age');
  }

  get sex() {
    return this.form.get('sex');
  }

  get avatar() {
    return this.form.get('avatar');
  }

  get location() {
    return this.form.get('location');
  }

  async onSubmit() {
    this.errors = [];
    

    try {
      if (this.isLogin) {
        const password = this.password.value;
        const username = this.username.value;
        const email = this.email.value;

        var loginU = {
          email:email,
          password:password,
          // username:username,
        };
        console.log(loginU)

        this.authservice.login(loginU).subscribe(res=>{
            console.log(' ')
          },
          (errorResponse) => {
            this.errors.push(errorResponse.error.error);
          });
      }

      if (this.isSignup) {
        const password = this.password.value;
        const username = this.username.value;
        const email = this.email.value;
        const description = this.description.value;
        const age = this.age.value;
        const sex = this.sex.value;
        // const avatar = this.avatar.value;
        const location = this.location.value;

        var registerU = {
          password:password,
          username:username,
          email:email,
          description:description,
          age:age,
          sex:sex,
          // avatar:avatar,
          location:location,
        };
        console.log(registerU)

        this.authservice.postUser(registerU).subscribe(res=>{
            this.type = 'login'
          },
          (errorResponse) => {
            this.errors.push(errorResponse.error.error);
          });
      }
      if (this.isPasswordReset) {
       
        this.serverMessage = 'Check your email';
      }
    } catch (err) {
      this.serverMessage = err;
    }
     
  }

}
