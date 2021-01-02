import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RestApiService } from 'src/app/rest-api.service'

@Component({
  selector: 'app-agespan',
  templateUrl: './agespan.component.html',
  styleUrls: ['./agespan.component.scss']
})
export class AgespanComponent implements OnInit {

  form: FormGroup;

  serverMessage: string;

  constructor(private fb: FormBuilder, private service: RestApiService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      minage: ['', []],
      maxage: ['',[]],
    });
  }

  get minage() {
    return this.form.get('minage');
  }

  get maxage() {
    return this.form.get('maxage');
  }

  async onSubmit() {
    const minage = this.minage.value;
    const maxage = this.maxage.value;

    var val = {
      min_age:parseInt(minage),
      max_age:parseInt(maxage),
    };
    console.log(val)

      this.service.addAgeSpan(val).subscribe(res=>{
      alert(res.toString());
      });
  }

}
