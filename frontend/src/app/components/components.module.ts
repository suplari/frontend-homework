import { NgModule }                 from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartComponent }       from './highchart/highchart.component';
import { ListComponent }       from './list/list.component';
import { SelectButtonComponent } from './buttons/select-button.component';
import { Angular2FontawesomeModule} from 'angular2-fontawesome';
@NgModule({
    imports : [ CommonModule,Angular2FontawesomeModule ],
    declarations: [ HighchartComponent, ListComponent, SelectButtonComponent ],
    exports: [ HighchartComponent, ListComponent, SelectButtonComponent ]
})
export class ComponentsModule { }
