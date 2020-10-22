import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  socials: {};
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.socials = this.getSocial();
  }

  getSocial() {
    return this.configService.getConfig().socials;
  }

}
