import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials = {};
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.testimonials = this.getTestimonials();
  }

  getTestimonials() {
    return this.configService.getConfig().testimonials;
  }

}
