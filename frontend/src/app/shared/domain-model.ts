const uuid = require('uuid');

export enum LicenseType { Perpetual, Subscription, PayPerUse }


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
