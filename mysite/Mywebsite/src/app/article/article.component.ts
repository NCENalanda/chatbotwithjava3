import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  post = {};
  constructor(private route: ActivatedRoute,
              private configService: ConfigService,
              private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.post = this.getPostById(id);
  }

  getPostById(id: number) {
    return this.configService.getPostByID(id);
  }

  getBack() {
    this.location.back();
  }

}
