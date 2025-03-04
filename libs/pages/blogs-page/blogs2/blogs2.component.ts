import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

import { colors } from '../../../styles/colors';

@Component({
  selector: 'app-blogs2',
  templateUrl: './blogs2.component.html',
  styleUrls: ['./blogs2.component.scss']
})
export class Blogs2Component implements OnInit {
  colors = colors;
  blogs: any[] = [];
  tagColors: any = {};

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
    });

    this.blogService.getTagColors().subscribe(colors => {
      this.tagColors = colors;
    });
  }
}
