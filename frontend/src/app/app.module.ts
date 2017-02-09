import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { LocationStrategy,
         HashLocationStrategy,CommonModule }         from '@angular/common';

import { AppComponent }                 from './app.component';
import { Ng2BootstrapModule }           from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES }      from './shared/nav-dropdown.directive';

import { ChartsModule }                 from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES }    from './shared/sidebar.directive';

import { AsideToggleDirective }         from './shared/aside.directive';
import { BreadcrumbsComponent }         from './shared/breadcrumb.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SupplierDataService } from './services/supplier-data.service';
import { Angular2FontawesomeModule} from 'angular2-fontawesome';


// Routing Module
import { AppRoutingModule }             from './app.routing';

// Layouts
import { FullLayoutComponent }          from './layouts/full-layout.component';

// Http
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        Ng2BootstrapModule,
        ChartsModule,
        DashboardModule,
        Angular2FontawesomeModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
        NAV_DROPDOWN_DIRECTIVES,
        BreadcrumbsComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        AsideToggleDirective
    ],
    providers: [SupplierDataService,
    {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
