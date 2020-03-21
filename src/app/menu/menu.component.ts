import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonService } from '../common.service';
import * as Lottie from 'lottie-web/build/player/lottie';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  theme: string;
  previousUrl: string;
  @ViewChild("lottie", { static: true }) lottieElement: ElementRef;
  
  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit() {
    this.theme = localStorage.getItem('theme') && localStorage.length ? localStorage.getItem('theme') : 'dark';
    // Lottie.default.loadAnimation({
    //   container: this.lottieElement.nativeElement, // the dom element that will contain the animation
    //   renderer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   path: 'assets/lottie/animation.json' // the path to the animation json
    // }).setSpeed(0.9);
  }

  setTheme(theme) {
    localStorage.setItem('theme', theme);
    this.commonService.updateThemeValue(theme);
    this.theme = theme;
  }

  onNavigateBack() {
    this.previousUrl = this.commonService.getPreviousUrl();
    this.router.navigate([this.previousUrl]);
  }


}
