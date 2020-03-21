import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  theme: any;
  projectData: any = {};
  isLoading: boolean;

  constructor(private router: Router, private commonService: CommonService) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.theme = localStorage.getItem('theme') && localStorage.length ? localStorage.getItem('theme') : 'dark';
    this.commonService.themeValue.subscribe(theme => {
      this.theme = theme && theme.length ? theme : this.theme;
    });
    this.getProjectData();
  }


  hideLoader() {
    this.isLoading = false;
  }

  onOpenMenu() {
    this.router.navigate(['menu']);
  }

  onOpenLink(url) {
    window.open(url, "_blank")
  }

  getProjectData() {
    this.projectData = [
      {
        id: 4,
        name: "Angular Bottom Sheet",
        imgSrc: "btm.png",
        tags: ["Angular Library", "Plugin"],
        description: "Angular library to enable animated bottom sheet for your application.",
        links: {
          github: {
            value: true,
            link: "https://github.com/rahul051296/angular-bottom-sheet"
          },
          npm: {
            value: true,
            link: "https://www.npmjs.com/package/angular-bottom-sheet"
          }
        }
      },
      {
        id: 1,
        name: "Quake Alert",
        imgSrc: "quake.png",
        tags: ["Android App"],
        description: "A Native Android Application for fetching Earthquake information.",
        links: {
          github: {
            value: true,
            link: "https://github.com/rahul051296/quake-alert-android-app"
          }
        }
      },
      {
        id: 4,
        name: "Small Talk",
        imgSrc: "small.png",
        tags: ["A.I", "Chatbot", "NLU"],
        description: "Collection of casual conversations that can be used with the Rasa Stack",
        links: {
          github: {
            value: true,
            link: "https://github.com/rahul051296/small-talk-rasa-stack"
          }
        }
      },
      {
        id: 2,
        name: "The Hub",
        imgSrc: "hub.png",
        tags: ["Web App", "Social Media"],
        description: "A social media appplication to connect people with similar interest",
        links: {
          github: {
            value: true,
            link: "https://github.com/rahul051296/the-hub"
          },
          direct: {
            value: true,
            link: "https://the-hub-social.000webhostapp.com/"
          }
        }
      },
      {
        id: 3,
        name: "Bounce",
        imgSrc: "bounce.png",
        tags: ["Web App", "Game"],
        description: "A simple JavaScript based arcade game.",
        links: {
          github: {
            value: true,
            link: "https://github.com/rahul051296/bounce"
          },
          direct: {
            value: true,
            link: "http://rahulprabhakar.in/bounce/"
          }
        }
      },
      {
        id: 3,
        name: "Movie Buffs",
        imgSrc: "mb_app.png",
        tags: ["Mobile App", "Hybrid App", "PWA"],
        description: "A Hybrid Mobile Application for fetching information on Movies, TV Shows and Celebrities.",
        links: {
          github: {
            value: true,
            link: "https://github.com/rahul051296/movie-buffs-ionic-app"
          },
          gplay: {
            value: true,
            link: "https://play.google.com/store/apps/details?id=com.rahul0596.moviebuffs"
          }
        }
      },
      {
        id: 3,
        name: "Movie Buffs",
        imgSrc: "mb.png",
        tags: ["Web App"],
        description: "A Dynamic Web Application for fetching information on Movies, TV Shows and Celebrities.",
        links: {
          github: {
            value: true,
            link: "https://github.com/rahul051296/movie-buffs"
          },
        }
      },
      {
        id: 4,
        name: "Department of C.S.E",
        imgSrc: "cse.png",
        tags: ["Web App"],
        description: "The Official Website for the C.S.E Department of St. Joseph's College of Engineering.",
        links: {
          direct: {
            value: true,
            link: "http://cse.stjosephsmail.in/"
          },
        }
      }
    ]
  }

}
