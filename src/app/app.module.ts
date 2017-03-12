import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';

import {CollapseDirective} from 'ng2-bootstrap'
import {TopnavComponent} from './shared/topnav/topnav.component';
import {BlogComponent} from './blog/blog.component';
import {AboutComponent} from './about/about.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {routing} from "./app.routes";
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {AppConfig} from "./app.config";
import {AuthGuard} from "./guards/auth.guard";
import {AuthenticationService} from "./services/auth.service";

@NgModule({
    declarations: [
        AppComponent,
        TopnavComponent,
        BlogComponent,
        AboutComponent,
        PortfolioComponent,
        CollapseDirective,
        LoginComponent,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        AppConfig,
        AuthGuard,
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
