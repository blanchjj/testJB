import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDashAddNodeComponent } from './inv-dash-add-node.component';

describe('InvDashAddNodeComponent', () => {
  let component: InvDashAddNodeComponent;
  let fixture: ComponentFixture<InvDashAddNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvDashAddNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvDashAddNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
