import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() theme: string;
  @Output() onThemeChange = new EventEmitter();
  flags: any = {};
  @ViewChild("sliderButton", { static: true }) sliderButton: ElementRef;
  @ViewChild("sliderContainer", { static: true }) sliderContainer: ElementRef;
  @ViewChild("lightButton", { static: true }) lightButton: ElementRef;
  @ViewChild("darkButton", { static: true }) darkButton: ElementRef;

  constructor(private router: Router, private commonService: CommonService) { }

  ngOnInit() {
    this.flags.isDarkMode = false;
    if(this.theme && this.theme.includes('dark')) {
      this.flags.isDarkMode = false;
      this.switchOn();
    } else {
      this.flags.isDarkMode = true;
      this.switchOff();
    }

  }

  switchOn() {
    if (!this.flags.isDarkMode) {
      this.flags.isDarkMode = true;
      this.theme = 'dark';
      this.setTheme(this.theme);
      this.onThemeChange.emit('dark');
      this.sliderButton.nativeElement.classList.remove('slide-left');
      this.sliderContainer.nativeElement.classList.remove('slider-light');
      this.lightButton.nativeElement.classList.remove('text-dark-muted');
      this.darkButton.nativeElement.classList.remove('text-dark');
      this.darkButton.nativeElement.classList.remove('text-dark-muted');
      this.sliderButton.nativeElement.classList.add('slide-right');
      this.sliderContainer.nativeElement.classList.add('slider-dark');
      this.lightButton.nativeElement.classList.add('text-white-muted');
      this.darkButton.nativeElement.classList.add('text-white');

    } else {
      this.switchOff();
    }

  }
  switchOff() {
    if (this.flags.isDarkMode) {
      this.flags.isDarkMode = false;
      this.theme = 'light';
      this.setTheme(this.theme);
      this.onThemeChange.emit(this.theme);
      this.sliderButton.nativeElement.classList.remove('slide-right');
      this.sliderContainer.nativeElement.classList.remove('slider-dark');
      this.lightButton.nativeElement.classList.remove('text-white-muted');
      this.darkButton.nativeElement.classList.remove('text-white');
      this.sliderButton.nativeElement.classList.add('slide-left');
      this.sliderContainer.nativeElement.classList.add('slider-light');
      this.lightButton.nativeElement.classList.add('text-dark');
      this.darkButton.nativeElement.classList.add('text-dark-muted');

    } else {
      this.switchOn();
    }
  }



  setTheme(theme) {
    localStorage.setItem('theme', theme);
    this.commonService.updateThemeValue(theme);
    this.theme = theme;
  }

}
