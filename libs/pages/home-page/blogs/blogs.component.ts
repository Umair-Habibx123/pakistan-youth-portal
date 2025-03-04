import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { colors } from '../../../styles/colors';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  colors = colors;

  blogs: any[] = [];
  tagColors: any = {};
  featuredBlog: any;

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
      this.featuredBlog = this.blogs[2]; // Array index starts from 0, so 2 is the third element
    });

    this.blogService.getTagColors().subscribe(colors => {
      this.tagColors = colors;
    });
  }
}