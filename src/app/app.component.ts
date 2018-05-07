import { Component } from '@angular/core';
import productList from './products';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    products: any[] = productList;
    cart: any[] = [];
    cartTotal: number = 0;

    // Arrays for product name generation.
    productAdjective: string[] = ['Large', 'Sturdy', 'Weak', 'Well-Made', 'Ancient', 'Cheap'];
    productMaterial: string[] = ['Wooden', 'Metal', 'Composite', 'Crystal', 'Electronic'];
    productType: string[] = ['Widget', 'Gizmo', 'Object', 'Doodad'];

    constructor() {
        this.generateProductName();
    }

    generateProductName() {
        /* Randomly generate a name for each product in the products array,
        using one word from each of the three name arrays. Example result: 'Sturdy Metal Widget' */
        var cls = this;
        this.products.forEach(function(prod) {
            var adj = cls.productAdjective[Math.floor(Math.random() * cls.productAdjective.length)];
            var mat = cls.productMaterial[Math.floor(Math.random() * cls.productMaterial.length)];
            var typ = cls.productType[Math.floor(Math.random() * cls.productType.length)];
            prod.name =  adj + " " + mat + " " + typ;
        });
    }

    add(event) {
        this.setCartTotal("add");
        debugger;
    }

    remove() {
        this.setCartTotal("remove");
    }

    setCartTotal(action) {
        switch (action) {
            case "add":
                this.cartTotal += 1;
                break;
            case "remove":
                this.cartTotal -= 1;
                break;
        }

    }

    clear() {
        this.cartTotal = 0;
        this.cart = [];
    }

}
