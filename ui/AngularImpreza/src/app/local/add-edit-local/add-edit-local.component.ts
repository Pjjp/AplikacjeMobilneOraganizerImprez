import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from 'src/app/rest-api.service'

@Component({
  selector: 'app-add-edit-local',
  templateUrl: './add-edit-local.component.html',
  styleUrls: ['./add-edit-local.component.scss']
})
export class AddEditLocalComponent implements OnInit {

  constructor(
    private service:RestApiService,
    ) { }

  @Input() local;
  // local: any;
  local_name:string; 
  min_age:string;
  max_age:string; 
  is_open:string; 
  member_count:string; 
  max_member_count:string; 
  is_selction:string; 

  panelOpenState = true;

  ngOnInit(): void {
    // this.get_local(1);
    // this.get_local_name(1);
    // this.get_min_age(1);
    // this.get_is_open(1);
    // this.get_member_count(1);
    // this.get_max_member_count(1);
    // this.get_is_selction(1);
    console.log('local:'+ this.local)

  }

  get_local(id){
    this.service.getLocalById(id).subscribe(data=>{
      this.local=data;
      console.log('local in func:'+ this.local)
    });
  }

  // get_local_name(id){
  //   this.service.getLocalById(id).subscribe(data=>{
  //     this.local_name=this.local.local_name;
  //   });
  // }

  // get_min_age(id){
  //   this.service.getLocalById(id).subscribe(data=>{
  //     this.min_age=this.local.room_state.age_span.min_age;
  //   });
  // }

  // get_max_age(id){
  //   this.service.getLocalById(id).subscribe(data=>{
  //     this.max_age=this.local.room_state.age_span.max_age;
  //   });
  // }

  // get_is_open(id){
  //   this.service.getLocalById(id).subscribe(data=>{
  //     this.is_open=this.local.room_state.is_open;
  //   });
  // }

  // get_member_count(id){
  //   this.service.getLocalById(id).subscribe(data=>{
  //     this.member_count=this.local.room_state.member_count;
  //   });
  // }

  // get_max_member_count(id){
  //   this.service.getLocalById(id).subscribe(data=>{
  //     this.max_member_count=this.local.room_state.max_member_count;
  //   });
  // }

  // get_is_selction(id){
  //   this.service.getLocalById(id).subscribe(data=>{
  //     this.is_selction=this.local.room_state.is_selction;
  //   });
  // }

}
