import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/rest-api.service'
import { LocalsStore } from '../../@store';

@Component({
  selector: 'app-show-local',
  templateUrl: './show-local.component.html',
  styleUrls: ['./show-local.component.scss']
})
export class ShowLocalComponent implements OnInit {

  constructor(
    private service:RestApiService,
    public store: LocalsStore,
    ) { }

  localData:any;

  panelOpenState = true;

  ngOnInit(): void {
    // this.get_local(1);
    // console.log(this.store.state$[1].allLocals)
    // this.store.bulkReadLocals();

  }

  get_local(id){
    this.service.getLocalById(id).subscribe(data=>{
      this.localData=data;
    });
  }

  

}
