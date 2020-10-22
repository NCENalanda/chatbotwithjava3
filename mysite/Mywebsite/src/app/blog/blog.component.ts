import { PagerService } from './../pager.service';
import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blog: any = {};
allItems: any[];
pages: any[];
pager: any = {};
pageSize = 3;
  constructor(private configService: ConfigService,
              private pagerService: PagerService) { }

  ngOnInit() {
    this.blog  = this.getBlog();
    this.allItems = this.blog.posts;
    this.setPage(1);
  }

  getBlog() {
    return this.configService.getConfig().blog;
  }

  setPage(pageNumber: number) {
    // create a pager using paging service
    this.pager = this.pagerService.getPager(this.allItems.length, pageNumber, this.pageSize );
    this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
