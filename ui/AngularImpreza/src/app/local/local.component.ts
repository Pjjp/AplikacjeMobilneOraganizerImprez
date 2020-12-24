import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/rest-api.service'

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  
  constructor(private service:RestApiService) { }

  ngOnInit(): void {
  }

}
