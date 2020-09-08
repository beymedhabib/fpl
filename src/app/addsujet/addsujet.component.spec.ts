import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsujetComponent } from './addsujet.component';

describe('AddsujetComponent', () => {
  let component: AddsujetComponent;
  let fixture: ComponentFixture<AddsujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
