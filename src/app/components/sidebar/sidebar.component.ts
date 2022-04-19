import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    //{ path: '/table-list', title: 'Table ',  icon:'content_paste', class: '' },
    { path: '/tableusers', title: 'Table Users ',  icon:'content_paste', class: '' },
    { path: '/tableprojet', title: 'Table projet ',  icon:'content_paste', class: '' },
    { path: '/tablecontrat', title: 'Table contrat ',  icon:'content_paste', class: '' },
    { path: '/pattern', title: 'pattern ',  icon:'content_paste', class: '' },
    

    //{ path: '/tablecontrat', title: 'bilel',  icon:'content_paste', class: '' },
    //{ path: '/tablepattern', title: 'Table pattern',  icon:'content_paste', class: '' },
    
   // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
   // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
