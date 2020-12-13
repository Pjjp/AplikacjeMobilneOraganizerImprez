import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/rest-api.service'

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {

  constructor(private service:RestApiService) { }

  guests_list:any=[];

  ngOnInit(): void {
    this.getGuestList();
  }

  getGuestList(){
    this.service.getGuestList().subscribe(data=>{
      this.guests_list=data;
    });
  }

}
