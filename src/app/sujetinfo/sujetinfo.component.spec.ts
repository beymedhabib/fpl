import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetinfoComponent } from './sujetinfo.component';

describe('SujetinfoComponent', () => {
  let component: SujetinfoComponent;
  let fixture: ComponentFixture<SujetinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SujetinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SujetinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
