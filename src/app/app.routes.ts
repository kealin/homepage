/**
 * Created by Kim Lindqvist on 11-Mar-17.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PortfolioComponent} from './portfolio/portfolio.component';
import {BlogComponent} from './blog/blog.component';
import {AboutComponent} from './about/about.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from './guards/auth.guard';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
    // Public routes
    {path: '', redirectTo: 'blog', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'login', component: LoginComponent},

    // Admin routes
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},

    // Other
    {path: '**', redirectTo: ''}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);