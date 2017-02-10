import { Injectable } from '@angular/core';
import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import * as crossfilter from 'crossfilter';

import { Supplier, Contract, Product, LicenseType, MetricSpec } from '../shared/domain-model';


@Injectable()
export class SupplierDataService {
  private suppliers: Array<Supplier> = [];

      
  public constructor(private http: Http) {
    this.generateData();

  }

  public generateData(useBackend = true, from: Date = new Date('2015-01-01T00:00:00Z'), to: Date = new Date('2016-12-01T00:00:00Z') ) {
    this.suppliers = [
        new Supplier('SAP', 'http://clearbit.com/logo/sap.com', [
          new Contract(
            'SAP',
            [new Product('ELA', 15000000, LicenseType.Perpetual)],
            new Date('2015-01-01T00:00:00Z'),
            new Date('2017-01-01T00:00:00Z'))]),
        new Supplier('Oracle', 'http://clearbit.com/logo/oracle.com', [
          new Contract(
            'Oracle',
            [new Product('RDBMS', 2000000, LicenseType.Perpetual),
              new Product('Financials', 1000000, LicenseType.Perpetual),
              new Product('Analytics', 1000000, LicenseType.Perpetual)],
            new Date('2015-01-01T00:00:00Z'),
            new Date('2017-01-01T00:00:00Z'))]),
       new Supplier('SalesForce', 'http://clearbit.com/logo/oracle.com', [
          new Contract(
            'SalesForce',
            [new Product('CRM', 1500000, LicenseType.Subscription)],
            new Date('2015-01-01T00:00:00Z'),
            new Date('2017-01-01T00:00:00Z')),
       ])];
    }

  public getContracts() {
    let r: Array<Contract> = [];
    for( let s of this.suppliers) {
      for( let c of s.children) {
        r.push(c);
      }
    }
    return r;
  }


  public getSuppliers() {
    return this.suppliers;
  }

  public addSupplier() {
    let s = new Supplier('Supplier', 'http://clearbit.com/logo/unknown');
    
    this.suppliers.push(s );
    return s;
  }

  public removeSupplier(toDel: Supplier) {
    let index = this.suppliers.indexOf(toDel, 0);
    if (index > -1) {
      this.suppliers.splice(index, 1);
    }
  }



  public getMetricNames() {
    let r = {};
    for( let c of this.getContracts()) {
      for( let p of c.children ) {
        for( let m of p.children ) {
          r[m.name] = m.name;
        }
      }
    }
    return Object.keys(r);
  }




}
