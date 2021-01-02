import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/rest-api.service'
import { LocalsStore } from '../@store';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  
  constructor(
    private service:RestApiService,
    public store: LocalsStore,
    ) { }

  ngOnInit() {
    this.store.bulkReadLocals();
    console.log('oninit bulk read');
  }

}
