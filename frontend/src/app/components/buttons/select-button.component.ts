import { Component, Input } from '@angular/core';

// create your cellEditor as a Angular 2 component
@Component({
    selector: 'select-button',
    templateUrl: './select-button.component.html',
    styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent  {

    @Input() public checked = false;

    public constructor() {


    }

}
