import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositodinComponent } from './depositodin.component';

describe('DepositodinComponent', () => {
  let component: DepositodinComponent;
  let fixture: ComponentFixture<DepositodinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositodinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositodinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
