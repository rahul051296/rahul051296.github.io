import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { LottieAnimationViewModule } from 'ng-lottie';
import { AngularTiltModule } from 'angular-tilt';
import { SliderComponent } from './slider/slider.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { InViewportModule } from 'ng-in-viewport';

@NgModule({
  declarations: [
    AppComponent,
    CodeEditorComponent,
    LandingPageComponent,
    MenuComponent,
    SliderComponent,
    ProjectsComponent,
    AboutComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularTiltModule,
    LottieAnimationViewModule.forRoot(),
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
