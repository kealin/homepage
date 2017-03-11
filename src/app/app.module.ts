import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';

import {CollapseDirective} from 'ng2-bootstrap'
import {TopnavComponent} from './shared/topnav/topnav.component';
import {BlogComponent} from './blog/blog.component';
import {HomeComponent} from './home/home.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {routing} from "./app.routes";

@NgModule({
    declarations: [
        AppComponent,
        TopnavComponent,
        BlogComponent,
        HomeComponent,
        PortfolioComponent,
        CollapseDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
