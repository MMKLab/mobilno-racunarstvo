import {Component, Input, OnInit} from '@angular/core';
import {Lek} from '../lek.model';

@Component({
    selector: 'app-lekovi-detail',
    templateUrl: './lekovi-detail.component.html',
    styleUrls: ['./lekovi-detail.component.css']
})
export class LekoviDetailComponent implements OnInit {
    @Input() lek: Lek;

    constructor() {
    }

    ngOnInit() {
    }

}
