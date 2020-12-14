import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/rest-api.service'

@Component({
  selector: 'app-show-local',
  templateUrl: './show-local.component.html',
  styleUrls: ['./show-local.component.scss']
})
export class ShowLocalComponent implements OnInit {

  constructor(private service:RestApiService) { }

  local:any;

  ngOnInit(): void {
    this.get_local(5);
  }

  get_local(id){
    this.service.getLocalById(id).subscribe(data=>{
      this.local=data;
      console.log(this.local.room_state.age_span.min_age)
    });
  }

}
