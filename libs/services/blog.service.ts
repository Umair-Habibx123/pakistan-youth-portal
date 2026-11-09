import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private blogs = [
        {
            id: 1,
            logo: 'assets/images/blog1.png',
            title: 'Three Pillars of User Delight',
            date: new Date(2014, 10, 16),
            description: "As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
                "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
                "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
                "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
                "daily to maintain a steady flow of potential prospects.",
            tags: [
                "Research",
                "UI UX"
            ]
        },
        {
            id: 2,
            logo: 'assets/images/blog2.jpg',
            title: ' UX Mapping Methods',
            date: new Date(2017, 8, 24),
            description: "Visual-design principles can be applied consistently throughout the process of creating a polished UX map As an Outbound Sales Development Representative at Devsinc, you will play a key role in driving our growth " +
                "strategy. Reporting to the Sales Manager, you will prospect, qualify, and create opportunities for our " +
                "Account Executives through consultative outreach and data-driven strategies. Create opportunities for discovery " +
                "calls with Account Executives by building a consistent and qualified pipeline. Set 1-3 qualified discovery calls " +
                "daily to maintain a steady flow of potential prospects.",
            tags: [
                "Research",
                "UI Design"
            ]
        },
        {
            id: 3,
            logo: 'assets/images/blog3.jpg',
            title: 'Agile Development Projects and Usability',
            date: new Date(2014, 2, 13),
            description: "Agile methods aim to overcome usability barriers in traditional development, but pose new threats to user experience quality.",
            tags: ["Programming", "Research", "Developments"]
        },
    ];


    private tagColors = {
        Research: { text: 'text-pink-500', bg: 'bg-pink-100' },
        'UI UX': { text: 'text-blue-500', bg: 'bg-blue-100' },
        'UI Design': { text: 'text-blue-500', bg: 'bg-blue-100' },
        Programming: { text: 'text-orange-500', bg: 'bg-orange-100' },
        Developments: { text: 'text-purple-500', bg: 'bg-purple-100' },
    };

    constructor() { }

    getBlogs(): Observable<any[]> {
        return of(this.blogs);
    }

    getTagColors(): Observable<any> {
        return of(this.tagColors);
    }
}