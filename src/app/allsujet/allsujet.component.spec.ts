import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsujetComponent } from './allsujet.component';

describe('AllsujetComponent', () => {
  let component: AllsujetComponent;
  let fixture: ComponentFixture<AllsujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllsujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
