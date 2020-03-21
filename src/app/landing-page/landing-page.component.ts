import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  theme: string;

  constructor(public router: Router, private commonService: CommonService) {
  }

  ngOnInit() {
    this.theme = localStorage.getItem('theme') && localStorage.length ? localStorage.getItem('theme') : 'dark';
    this.commonService.themeValue.subscribe(theme => {
      this.theme = theme && theme.length? theme: this.theme;
    });
  }

  onOpenMenu() {
    this.router.navigate(['menu']);
  }





}
