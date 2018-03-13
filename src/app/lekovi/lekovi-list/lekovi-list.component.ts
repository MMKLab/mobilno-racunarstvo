import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Lek} from '../lek.model';

@Component({
    selector: 'app-lekovi-list',
    templateUrl: './lekovi-list.component.html',
    styleUrls: ['./lekovi-list.component.css']
})
export class LekoviListComponent implements OnInit {
    @Output() lekWasSelected = new EventEmitter<Lek>();

    lekovi: Lek[] = [
        new Lek('Brufen', 'Brufen od 200mg', 'no-image'),
        new Lek('Andol', 'Andol neki ko ce ga znati', 'no-image'),
        new Lek('Vitamin C', 'Pravi vitamin C nije fus', 'no-image'),
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onLekSelected(lek: Lek) {
        this.lekWasSelected.emit(lek);
    }
}
