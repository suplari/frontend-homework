/*
    *
    * Wijmo Library 5.20163.240
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
var __extends=this && this.__extends || function(d, b)
{
function __()
{
this.constructor = d
}
for (var p in b)
b.hasOwnProperty(p) && (d[p] = b[p]);
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
};
define(["require", "exports", 'wijmo/wijmo.chart.analytics', '@angular/core', '@angular/core', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase'], function(require, exports, wjcChartAnalytics, core_1, core_2, core_3, common_1, wijmo_angular2_directiveBase_1)
{
"use strict";
var wjFlexChartTrendLine_outputs=['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ],
WjFlexChartTrendLine=function(_super)
{
function WjFlexChartTrendLine(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjFlexChartTrendLine, _super), WjFlexChartTrendLine.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartTrendLine.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartTrendLine.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartTrendLine.meta = {
outputs: wjFlexChartTrendLine_outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartTrendLine.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-flex-chart-trend-line', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'sampleCount', 'order', 'fitType', ], outputs: wjFlexChartTrendLine_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartTrendLine
})
}, ]
}, ]
}, ], WjFlexChartTrendLine.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartTrendLine
}(wjcChartAnalytics.TrendLine),
wjFlexChartMovingAverage_outputs,
WjFlexChartMovingAverage,
wjFlexChartYFunctionSeries_outputs,
WjFlexChartYFunctionSeries,
wjFlexChartParametricFunctionSeries_outputs,
WjFlexChartParametricFunctionSeries,
wjFlexChartWaterfall_outputs,
WjFlexChartWaterfall,
moduleExports,
WjChartAnalyticsModule;
exports.WjFlexChartTrendLine = WjFlexChartTrendLine;
wjFlexChartMovingAverage_outputs = ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ];
WjFlexChartMovingAverage = function(_super)
{
function WjFlexChartMovingAverage(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjFlexChartMovingAverage, _super), WjFlexChartMovingAverage.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartMovingAverage.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartMovingAverage.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartMovingAverage.meta = {
outputs: wjFlexChartMovingAverage_outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartMovingAverage.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-flex-chart-moving-average', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'sampleCount', 'period', 'type', ], outputs: wjFlexChartMovingAverage_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartMovingAverage
})
}, ]
}, ]
}, ], WjFlexChartMovingAverage.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartMovingAverage
}(wjcChartAnalytics.MovingAverage);
exports.WjFlexChartMovingAverage = WjFlexChartMovingAverage;
wjFlexChartYFunctionSeries_outputs = ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ];
WjFlexChartYFunctionSeries = function(_super)
{
function WjFlexChartYFunctionSeries(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjFlexChartYFunctionSeries, _super), WjFlexChartYFunctionSeries.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartYFunctionSeries.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartYFunctionSeries.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartYFunctionSeries.meta = {
outputs: wjFlexChartYFunctionSeries_outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartYFunctionSeries.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-flex-chart-y-function-series', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'sampleCount', 'min', 'max', 'func', ], outputs: wjFlexChartYFunctionSeries_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartYFunctionSeries
})
}, ]
}, ]
}, ], WjFlexChartYFunctionSeries.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartYFunctionSeries
}(wjcChartAnalytics.YFunctionSeries);
exports.WjFlexChartYFunctionSeries = WjFlexChartYFunctionSeries;
wjFlexChartParametricFunctionSeries_outputs = ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ];
WjFlexChartParametricFunctionSeries = function(_super)
{
function WjFlexChartParametricFunctionSeries(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjFlexChartParametricFunctionSeries, _super), WjFlexChartParametricFunctionSeries.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartParametricFunctionSeries.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartParametricFunctionSeries.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartParametricFunctionSeries.meta = {
outputs: wjFlexChartParametricFunctionSeries_outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartParametricFunctionSeries.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-flex-chart-parametric-function-series', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'sampleCount', 'min', 'max', 'func', 'xFunc', 'yFunc', ], outputs: wjFlexChartParametricFunctionSeries_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartParametricFunctionSeries
})
}, ]
}, ]
}, ], WjFlexChartParametricFunctionSeries.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartParametricFunctionSeries
}(wjcChartAnalytics.ParametricFunctionSeries);
exports.WjFlexChartParametricFunctionSeries = WjFlexChartParametricFunctionSeries;
wjFlexChartWaterfall_outputs = ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ];
WjFlexChartWaterfall = function(_super)
{
function WjFlexChartWaterfall(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp)
}
return __extends(WjFlexChartWaterfall, _super), WjFlexChartWaterfall.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartWaterfall.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartWaterfall.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartWaterfall.meta = {
outputs: wjFlexChartWaterfall_outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartWaterfall.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-flex-chart-waterfall', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'relativeData', 'start', 'startLabel', 'showTotal', 'totalLabel', 'showIntermediateTotal', 'intermediateTotalPositions', 'intermediateTotalLabels', 'connectorLines', 'styles', ], outputs: wjFlexChartWaterfall_outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartWaterfall
})
}, ]
}, ]
}, ], WjFlexChartWaterfall.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexChartWaterfall
}(wjcChartAnalytics.Waterfall);
exports.WjFlexChartWaterfall = WjFlexChartWaterfall;
moduleExports = [WjFlexChartTrendLine, WjFlexChartMovingAverage, WjFlexChartYFunctionSeries, WjFlexChartParametricFunctionSeries, WjFlexChartWaterfall];
WjChartAnalyticsModule = function()
{
function WjChartAnalyticsModule(){}
return WjChartAnalyticsModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjChartAnalyticsModule.ctorParameters = [], WjChartAnalyticsModule
}();
exports.WjChartAnalyticsModule = WjChartAnalyticsModule
})