import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  services = {};
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.services = this.getServices();
  }

  getServices() {
    return this.configService.getConfig().services;
  }

}
