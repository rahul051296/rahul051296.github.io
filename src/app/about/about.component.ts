import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ProgressBarOptions } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  theme: any;
  skills: any = {};

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.theme = localStorage.getItem('theme') && localStorage.length ? localStorage.getItem('theme') : 'dark';
    this.commonService.themeValue.subscribe(theme => {
      this.theme = theme && theme.length ? theme : this.theme;
    });
    this.getData();
  }

  getData() {
    this.skills = {
      languages: [
        {
          title: "JavaScript",
          icon: "fab fa-js"
        },
        {
          title: "TypeScript",
          icon: "fab fa-js"
        },
        {
          title: "HTML/CSS",
          icon: "fab fa-js"
        },
        {
          title: "Python",
          icon: "fab fa-js"
        },
        {
          title: "Java",
          icon: "fab fa-js"
        },
        {
          title: "PHP",
          icon: "fab fa-js"
        },
        {
          title: "C",
          icon: "fab fa-css3-alt"
        },
        {
          title: "C++",
          icon: "fab fa-css3-alt"
        },
        {
          title: "SQL",
          icon: "fab fa-python"
        }
      ],
      frameworks: [
        {
          title:'Angular',
          icon: 'fab fa-js'
        },
        {
          title:'Express.js',
          icon: 'fab fa-js'
        },
        {
          title:'Node.js',
          icon: 'fab fa-js'
        },
        {
          title:'jQuery',
          icon: 'fab fa-js'
        },
        {
          title:'AngularJS',
          icon: 'fab fa-js'
        },
        {
          title:'Angular Material',
          icon: 'fab fa-js'
        },
        {
          title:'Ionic (Cordova)',
          icon: 'fab fa-js'
        },
        {
          title: 'Bootstrap',
          icon: "fab fa-css3-alt"
        },
        {
          title: 'Flask',
          icon: "fab fa-python"
        },
        {
          title: 'BS4',
          icon: "fab fa-python"
        },
        {
          title: 'numpy',
          icon: "fab fa-python"
        },
        {
          title: 'RASA SDK',
          icon: "fab fa-python"
        },
        {
          title: 'Android SDK',
          icon: "fab fa-java"
        },
        {
          title: 'SpringBoot',
          icon: "fab fa-java"
        },
        {
          title: 'JAX-RS',
          icon: "fab fa-java"
        },
        {
          title: "ElasticSearch/Kibana"
        },
        {
          title: "HighCharts"
        },
        {
          title: "Flowable"
        }
      ],
      tools: [
        {
          title: "Git"
        },
        {
          title: "Adobe XD"
        },
        {
          title: "Figma"
        },
        {
          title: "JIRA"
        }
      ]
    }
  }

}
