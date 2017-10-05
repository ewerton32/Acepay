import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositobtcComponent } from './depositobtc.component';

describe('DepositobtcComponent', () => {
  let component: DepositobtcComponent;
  let fixture: ComponentFixture<DepositobtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositobtcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositobtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
