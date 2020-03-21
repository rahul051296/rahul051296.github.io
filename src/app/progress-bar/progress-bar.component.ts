import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../common.service';

export interface ProgressBarOptions {
  title: string,
  value: string | number;
  icon: string
}

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {
  @Input() options: ProgressBarOptions;
  theme: string;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.theme = localStorage.getItem('theme') && localStorage.length ? localStorage.getItem('theme') : 'dark';
    this.commonService.themeValue.subscribe(theme => {
      this.theme = theme && theme.length ? theme : this.theme;
    });
  }

}
