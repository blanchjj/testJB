import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDashParamComponent } from './inv-dash-param.component';

describe('InvDashParamComponent', () => {
  let component: InvDashParamComponent;
  let fixture: ComponentFixture<InvDashParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvDashParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvDashParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
