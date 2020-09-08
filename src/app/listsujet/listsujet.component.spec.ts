import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsujetComponent } from './listsujet.component';

describe('ListsujetComponent', () => {
  let component: ListsujetComponent;
  let fixture: ComponentFixture<ListsujetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsujetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
