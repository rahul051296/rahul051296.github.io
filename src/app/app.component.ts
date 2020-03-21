import { Component, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { slideInAnimation } from './route-animations';
import { CommonService } from './common.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  theme: string;
  previousUrl: string;
  flags: any = {};
  @ViewChild("cursor", { static: true }) cursor: ElementRef;

  constructor(private commonService: CommonService, public router: Router, private renderer: Renderer2, private meta: Meta) { }

  ngOnInit() {
    this.theme = localStorage.getItem('theme') && localStorage.length ? localStorage.getItem('theme') : 'dark';
    this.commonService.themeValue.subscribe(theme => {
      this.theme = theme ? theme : this.theme;
    });
  }

  setTheme(theme) {
    localStorage.setItem('theme', theme);
    this.commonService.updateThemeValue(theme);
    this.theme = theme;
  }

  getWidth() {
    let width = window.innerWidth;
    if (width <= 768) {
      return `100%`;
    } else {
      return `calc(100% - 100px)`;
    }
  }
}

