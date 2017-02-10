import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplierDataService} from '../services/supplier-data.service';

declare var require: any;

declare var color: any;


// You can load Highcharts static if you need its API
import * as Highcharts from 'highcharts';

// If you want you can also load any Highcharts module here: 'highcharts/highcharts-more', 'highcharts/modules/map' and etc.
// See the node_modules/highcharts folders to find a necessary module
require('highcharts/modules/treemap')(Highcharts);
require('highcharts/modules/heatmap')(Highcharts);

function getColor(idx) {
  return Highcharts.getOptions().colors[idx * 10];
}

let hg: any = Highcharts;
hg.seriesTypes.treemap.prototype.getExtremesFromAll = true;


@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(supplierDataService: SupplierDataService) {
    let minColor = hg.color('red');
    minColor.init('#23c874');
    let maxColor = hg.color('green');
    maxColor.init('#d03b53');

    let data: any = [];



    let maxValue = 0;




    this.options = {
      tooltip: {
        backgroundColor: 'yellow',
        formatter: function () {
          return this.point.name + ' : ' + this.point.value.toLocaleString('en', {
            style: 'currency',
            currency: 'USD'
          }) + '  -> '+ this.point.colorValue;
        }
      },

      colorAxis: {
        minColor: '#23c874',
        maxColor: '#d03b53'
      },
      chart: {
        width: null,
        height: null
      },
      title: { text: 'Suplier Spend' },
      series: [{
        colorByPoint: true,
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: data
      }]
    };
  }

  tweenColors(from, to, pos) {
    // Check for has alpha, because rgba colors perform worse due to lack of
    // support in WebKit.
    let hasAlpha,
      ret;

    // Unsupported color, return to-color (#3920)
    if (!to.rgba.length || !from.rgba.length) {
      console.log('unsuported color: {} -> {}', from.rgba, to.rgba);
      ret = to.input || 'none';

      // Interpolate
    } else {
      from = from.rgba;
      to = to.rgba;
      hasAlpha = (to[3] !== 1 || from[3] !== 1);
      ret = (hasAlpha ? 'rgba(' : 'rgb(') +
        Math.round(to[0] + (from[0] - to[0]) * (1 - pos)) + ',' +
        Math.round(to[1] + (from[1] - to[1]) * (1 - pos)) + ',' +
        Math.round(to[2] + (from[2] - to[2]) * (1 - pos)) +
        (hasAlpha ? (',' + (to[3] + (from[3] - to[3]) * (1 - pos))) : '') + ')';
    }
    return ret;
  }
  options: Object;
  ngOnInit(): void {

  }
}
