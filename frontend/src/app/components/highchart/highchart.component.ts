import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

// If you want you can also load any Highcharts module here: 'highcharts/highcharts-more', 'highcharts/modules/map' and etc.
// See the node_modules/highcharts folders to find a necessary module
require('highcharts/modules/treemap')(Highcharts);
require('highcharts/modules/heatmap')(Highcharts);

@Component({
  selector: 'highchart',
  template: `
        <div>
            <div #chart></div>
        </div>
    `
})
export class HighchartComponent implements AfterViewInit, OnDestroy {

  @ViewChild('chart') public chartEl: ElementRef;

  @Input()
  opts: any;

  private _chart: any;

  public ngAfterViewInit() {
    if (!this.opts) {
      this.opts = {
        title: {
          text: 'Monthly Average Temperature',
          x: -20 //center
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
          name: 'Tokyo',
          data: [
            7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
            26.5, 23.3, 18.3, 13.9, 9.6
          ]
        }]
      };
    }

    if (this.chartEl && this.chartEl.nativeElement) {
      if (this.opts.chart) {
        this.opts.chart.renderTo = this.chartEl.nativeElement;
      } else {
        this.opts.chart = { type: 'line', renderTo: this.chartEl.nativeElement }
      }

      this._chart = new Highcharts.Chart(this.opts);
    }
  }


  public ngOnDestroy() {
    this._chart.destroy();
  }
}

