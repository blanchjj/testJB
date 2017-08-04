import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDashInvComponent } from './inv-dash-inv.component';

describe('InvDashInvComponent', () => {
  let component: InvDashInvComponent;
  let fixture: ComponentFixture<InvDashInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvDashInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvDashInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
