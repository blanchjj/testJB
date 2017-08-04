import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTreeMenuComponent } from './dash-tree-menu.component';

describe('DashTreeMenuComponent', () => {
  let component: DashTreeMenuComponent;
  let fixture: ComponentFixture<DashTreeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashTreeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashTreeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
