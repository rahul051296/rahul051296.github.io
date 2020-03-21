import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuComponent } from './menu/menu.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    { path: '', component: LandingPageComponent, data: { animation: 'Home' } },
    { path: 'menu', component: MenuComponent, data: { animation: 'Menu' } },
    { path: 'projects', component: ProjectsComponent, data: { animation: 'Project' } },
    { path: 'about', component: AboutComponent, data: { animation: 'About' } },
    { path: '**', redirectTo: "/" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }