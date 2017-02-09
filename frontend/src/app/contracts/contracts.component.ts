import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SupplierDataService } from '../services/supplier-data.service';
import { Supplier, Contract, Product, MetricSpec, LicenseType } from '../shared/domain-model';
import { GridOptions } from 'ag-grid';

import { Grid } from 'ag-grid';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit, AfterViewInit {

  private gridOptions: GridOptions;
  private showGrid: boolean;
  private rowData: any[];
  private columnDefs: any[];
  private rowCount: string;
  @ViewChild('contractsGrid') contractsGrid : Grid;

  
  suppliers: Array<Supplier>;
  licenseTypes = [LicenseType.PayPerUse, LicenseType.Perpetual, LicenseType.Subscription];
  constructor( private ssd: SupplierDataService, private ref:ChangeDetectorRef) {
    
    this.suppliers = ssd.getSuppliers();
  }


  private onModelUpdated() {
    console.log('onModelUpdated');

  }

  private onReady() {
    console.log('onReady');
  }

  private onCellClicked($event) {
    console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
  }

  private onCellValueChanged($event) {
    console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
  }

  private onCellDoubleClicked($event) {
    console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
  }

  private onCellContextMenu($event) {
    console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
  }

  private onCellFocused($event) {
    console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
  }


  private onSelectionChanged() {
    console.log('selectionChanged');
  }

  private onBeforeFilterChanged() {
    console.log('beforeFilterChanged');
  }

  private onAfterFilterChanged() {
    console.log('afterFilterChanged');
  }

  private onFilterModified() {
    console.log('onFilterModified');
  }

  private onBeforeSortChanged() {
    console.log('onBeforeSortChanged');
  }

  private onAfterSortChanged() {
    console.log('onAfterSortChanged');
  }

  private onVirtualRowRemoved($event) {
    // because this event gets fired LOTS of times, we don't print it to the
    // console. if you want to see it, just uncomment out this line
    // console.log('onVirtualRowRemoved: ' + $event.rowIndex);
  }

  private onRowClicked($event) {
    console.log('onRowClicked: ' + $event.node.data.name);
  }

  private onGenData($event) {
    console.log( ' onGenData'  );
    // this.modelService.supplierResource.generateInvoices();

  }

  private onAddSupplier($event) {
    console.log('onAddContract: ');
    let item = this.ssd.addSupplier()
      
    // let item = new Contract('Supplier', [], new Date());
    // this.gridOptions.api.addItems([item]);
  }

  private onDelSupplier( supplier: Supplier) {
    this.ssd.removeSupplier(supplier)
  }

  private onQuickFilterChanged($event) {
    this.gridOptions.api.setQuickFilter($event.target.value);
  }

  // here we use one generic event to handle all the column type events.
  // the method just prints the event name
  private onColumnEvent($event) {
    console.log('onColumnEvent: ' + $event);
  }
  licenseTypeString(lt: LicenseType) {
    return LicenseType[lt];
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.contractsLB = new wijmoInput.ListBox('#contractsLB', {
    //     itemsSource: this.ssd.getContracts(),
    //     displayMemberPath : 'supplier'
    // });
    // this.contractsLB.selectedIndexChanged.addHandler( (s, e) => {
    //   this.selectedContract = this.contractsLB.selectedItem;
    // });

  }

}

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function dateCellFormatter(params) {
  let date: Date =  params.value;
  return months[date.getMonth()] + ', ' + date.getFullYear();
}

