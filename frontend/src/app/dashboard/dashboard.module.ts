import { NgModule }                 from '@angular/core';
import { ChartsModule }             from 'ng2-charts/ng2-charts';
import { ChartModule }              from 'angular2-highcharts';

import { DashboardComponent }       from './dashboard.component';
import { DashboardRoutingModule }   from './dashboard-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
    imports: [
        DashboardRoutingModule,
        ChartsModule,
        ChartModule,
        ComponentsModule
    ],
    declarations: [ DashboardComponent ]
})
export class DashboardModule { }
