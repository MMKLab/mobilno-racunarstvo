import {Component, OnInit} from '@angular/core';
import {Lek} from './lek.model';

@Component({
    selector: 'app-lekovi',
    templateUrl: './lekovi.component.html',
    styleUrls: ['./lekovi.component.css']
})
export class LekoviComponent implements OnInit {
    odabraniLek: Lek;

    constructor() {
    }

    ngOnInit() {
    }

}
