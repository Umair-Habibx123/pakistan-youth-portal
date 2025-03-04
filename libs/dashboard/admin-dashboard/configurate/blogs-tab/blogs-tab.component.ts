import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../../../services/blog.service';
import { colors } from '../../../../styles/colors';

@Component({
  selector: 'app-blogs-tab',
  templateUrl: './blogs-tab.component.html',
  styleUrls: ['./blogs-tab.component.scss']
})
export class BlogsTabComponent implements OnInit {

  @Output() addNewSlider = new EventEmitter<void>();
  colors = colors;

  blogs: any[] = [];
  filteredBlogs: any[] = [];
  tagColors: any = {};
  searchTerm: string = '';

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
      this.filteredBlogs = [...this.blogs]; // Initialize filteredBlogs with all blogs
    });

    this.blogService.getTagColors().subscribe(colors => {
      this.tagColors = colors;
    });
  }

  openModal() {
    this.addNewSlider.emit();
  }

  filterBlogs() {
    if (!this.searchTerm.trim()) {
      this.filteredBlogs = [...this.blogs]; // Reset when search is empty
      return;
    }

    const lowerSearchTerm = this.searchTerm.toLowerCase();

    this.filteredBlogs = this.blogs.filter(blog =>
      blog.title.toLowerCase().includes(lowerSearchTerm) ||
      blog.description.toLowerCase().includes(lowerSearchTerm) ||
      blog.tags.some((tag: string) => tag.toLowerCase().includes(lowerSearchTerm))
    );
  }
}
