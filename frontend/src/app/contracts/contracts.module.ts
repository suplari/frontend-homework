import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartModule } from 'angular2-highcharts';

import { ContractsComponent } from './contracts.component';
import { ContractsRoutingModule } from './contracts-routing.module';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-ng2/main';
import { DatepickerModule } from 'ng2-bootstrap';
import { SuplariCurrencyFormatterDirective} from '../shared/currency-formatter.directive';
import { SuplariCurrencyPipe } from '../shared/currency.pipe';
import { ClearbitLogoComponent } from '../shared/clearbit-logo.component';
// import { WjInputDate } from 'wijmo/wijmo.angular2.input';

@NgModule({
    imports: [
        DatepickerModule,
        ContractsRoutingModule,
        ChartsModule,
        ChartModule,
        CommonModule,
        ComponentsModule,
        FormsModule,
        AgGridModule.withNg2ComponentSupport()
    ],
    declarations: [
        ContractsComponent,
        SuplariCurrencyPipe,
        SuplariCurrencyFormatterDirective,
        ClearbitLogoComponent
        ],
    providers: [SuplariCurrencyPipe]
})
export class ContractsModule { }
