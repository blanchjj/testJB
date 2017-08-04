import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvDashMessageComponent } from './inv-dash-message.component';

describe('InvDashMessageComponent', () => {
  let component: InvDashMessageComponent;
  let fixture: ComponentFixture<InvDashMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvDashMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvDashMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
