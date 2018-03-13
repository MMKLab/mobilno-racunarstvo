import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LekoviListComponent } from './lekovi-list.component';

describe('LekoviListComponent', () => {
  let component: LekoviListComponent;
  let fixture: ComponentFixture<LekoviListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekoviListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LekoviListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
