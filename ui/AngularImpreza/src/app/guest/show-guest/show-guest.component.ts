import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from 'src/app/rest-api.service'

@Component({
  selector: 'app-show-guest',
  templateUrl: './show-guest.component.html',
  styleUrls: ['./show-guest.component.scss']
})
export class ShowGuestComponent implements OnInit {

  constructor(private service:RestApiService) { }

  guests_list:any=[];
  // guest:any;
  mainUrl:string;
  @Input() guest;

  ngOnInit(): void {
    this.get_guest(5);
    this.mainUrl = this.service.getMainURL();
    console.log(this.mainUrl)
  }

  get_guest(id){
    this.service.getGuestById(id).subscribe(data=>{
      this.guest=data;
    });
  }

  showGuestList(){
    this.service.getGuestList().subscribe(data=>{
      this.guests_list=data;
      console.log(this.guests_list[0].avatar)
    });
  }

}
