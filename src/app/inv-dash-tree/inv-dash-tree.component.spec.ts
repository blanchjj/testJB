import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDashTreeComponent } from './inv-dash-tree.component';

describe('InvDashTreeComponent', () => {
  let component: InvDashTreeComponent;
  let fixture: ComponentFixture<InvDashTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvDashTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvDashTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
