import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apiobf',
  templateUrl: './apiobf.component.html',
  styleUrls: ['./apiobf.component.css']
})
export class ApiobfComponent implements OnInit {

  servers = [{dns : 'stg-lab', name : 'sandbox' },
           {dns : 'stg-fos', name : 'kiba' },
           {dns : 'fos', name : 'production' },
           {dns : 'stg-fos/kibadev', name : 'kiba-dev' },
           {dns : 's-fos', name : 'staging' },
           {dns : 'fos/fst', name : 'replica' }] ;
  clients = [];
  constructor() { }

  ngOnInit() {
  }

  getServerData( abc) {
    console.log(abc);
    this.servers = [{dns : 'stg-lab', name : 'sandbox' }];
    this.clients = [{name : 'rcp', type : 'public' }];
  }
}
