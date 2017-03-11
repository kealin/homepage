/**
 * Created by Kim Lindqvist on 11-Mar-17.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PortfolioComponent} from './portfolio/portfolio.component';
import {BlogComponent} from './blog/blog.component';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'blog', component: BlogComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);