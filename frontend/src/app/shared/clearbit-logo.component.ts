import { Component, Input, OnInit, OnChanges }                                from '@angular/core';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'clearbit-logo',
    template: `<img [src]="url" class="clearbit-logo">`,
    styleUrls: ['./clearbit-logo.component.scss']
})
export class ClearbitLogoComponent implements OnInit, OnChanges {
    @Input() name;

    url: string;
    constructor() {

    }



    updateUrl() {
        this.url = 'http://logo.clearbit.com/' + this.name+'.com';
    }

    ngOnInit(): void {
        this.updateUrl();
    }

    ngOnChanges() {
        this.updateUrl();
    }
}
