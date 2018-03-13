import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LekoviDetailComponent } from './lekovi-detail.component';

describe('LekoviDetailComponent', () => {
  let component: LekoviDetailComponent;
  let fixture: ComponentFixture<LekoviDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekoviDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LekoviDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
