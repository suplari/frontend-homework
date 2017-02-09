const uuid = require('uuid');

export enum LicenseType { Perpetual, Subscription, PayPerUse }

export interface IModelObject {
  id: string;
}

export interface ISupplier extends IModelObject {
  name: string;
  icon: string;
}

export interface IContract extends IModelObject {
  supplierId: string;
  name: string;
  startDate: string | Date;
  endDate: string | Date;
}

export interface IProduct extends IModelObject {
  contractId: string;
  price: string;
  license: string;
}

export interface IMetricSpec extends IModelObject {
  productId: string;
  name: string;
  min: string | number;
  max: string | number;
}

export interface IInvoice extends IModelObject {
  supplierId: string;
  date: string | Date;
  supplier: string;
}

export interface ILineItem extends IModelObject {
  invoiceId: string;
  product: string;
  amount: string | number;
}

class ModelObject {
  public id: string;
  public constructor() {
    this.id = uuid.v4();
  }
}

class TreeObject<T extends ModelObject> extends ModelObject {

  public constructor(public children: Array<T> = []) {
    super();
  }
  public removeChild(toDel: T ) {
    let index = this.children.indexOf(toDel, 0);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }
  public removeChildren(toDel: Array<T>) {
    for (let m of toDel) {
      this.removeChild(m);
    }
  }
  public addChild(toAdd: T ) {
    this.children.push(toAdd);
  }
  public addChildren(toAdd: Array<T>) {
    this.children.concat(toAdd);
  }
}

export class Supplier extends TreeObject<Contract> {
  public constructor(public name: string, public icon: string, public contracts: Array<Contract> = []) {
    super(contracts);
  }
}

export class Contract extends TreeObject<Product> {
  public constructor(
    public name: string,
    public children: Array<Product> = [],
    public startDate: Date = new Date(2015,1),
    public endDate: Date = new Date(2017,12)) {
    super();
  }
}

export class Product extends TreeObject<MetricSpec> {
  public constructor(public name: string,
    public price,
    public license: LicenseType,
    public children: Array<MetricSpec> = [new MetricSpec()]) {
    super();
  }

}

export class MetricSpec extends ModelObject {
  public constructor(public name  = 'logins', public min = 0, public max = 1000) {
    super();
  }
}


export class Invoice extends TreeObject<LineItem> {
  public constructor(public date: Date, public contract: Contract,  public lineItems: Array<LineItem> = []) {
    super();
  }

  public generateLineItems() {
    this.lineItems.length = 0; // clear line items
     if (this.date < this.contract.startDate) {
      return;
    }

    for (let p of this.contract.children) {
      let modifier = 1.0;
      if (p.license === LicenseType.Perpetual && this.date === this.contract.startDate) {
        modifier = .25;
      }
      let amt = modifier * Math.random() * p.price / 12;
      this.lineItems.push(new LineItem(new Date(this.date), this.contract.name, p, amt));
    }
  }
}

export class LineItem extends ModelObject {
  public color: any;
  public constructor(public date: Date, public supplier: string, public product: Product, public amount: number) {
    super();
  }
  generateMetrics() {

  }
}



export class Metric extends ModelObject {
  public constructor(public name: string, public value: number) {
    super();
  }
}