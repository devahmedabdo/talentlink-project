import { Component, OnInit, AfterViewInit, Input, ViewEncapsulation, HostListener, ViewChildren, QueryList } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'pg-menu-items',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('toggleHeight', [
      state(
        'close',
        style({
          height: '0',
          overflow: 'hidden'
        })
      ),
      state(
        'open',
        style({
          height: '*',
          overflow: '*'
        })
      ),

      transition('close => open', animate('140ms ease-in')),
      transition('open => close', animate('140ms ease-out'))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})

export class MenuComponent implements OnInit, AfterViewInit {
  menuItems = [];
  currentItem = null;
  isPerfectScrollbarDisabled = false;
  public config: PerfectScrollbarConfigInterface = {};
  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.togglePerfectScrollbar();
    });
  }

  @HostListener('window:resize', [])
  onResize() {
    this.togglePerfectScrollbar();
  }

  togglePerfectScrollbar() {
    this.isPerfectScrollbarDisabled = window.innerWidth < 1025;
  }

  @Input()
  set Items(value) {
    this.menuItems = value;
    this.checkRouter(this.router.url);
  }

  toggleNavigationSub(event, item) {
    if (item.submenu) {
      event.preventDefault();
      if (this.currentItem && this.currentItem !== item) {
        this.currentItem['toggle'] = 'close';
      }
      this.menuItems.forEach(elem => {
        elem.toggle = 'close';
      });
      this.currentItem = item;
      item.toggle = item.toggle === 'close' ? 'open' : 'close';
    }
  }

  toggleNavigationSubManualy(item) {
    if (item.submenu) {
      if (this.currentItem && this.currentItem !== item) {
        this.currentItem['toggle'] = 'close';
      }
      this.currentItem = item;
      item.toggle = item.toggle === 'close' ? 'open' : 'close';
    }
  }

  checkRouter(router) {
    this.menuItems.forEach(elem1 => {
      elem1.items.forEach(elem => {
        if (elem.hasOwnProperty('submenu')) {
          const found = elem.submenu.find(x => x.routerLink == router.split("?")[0]);
          if (found) {
            setTimeout(() => {
              this.toggleNavigationSubManualy(elem);
            }, 20);
            return true;
          }
        }
        //elem.toggle = 'close';
      });
    });
  }
}
