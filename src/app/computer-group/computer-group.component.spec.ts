import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerGroupComponent } from './computer-group.component';

describe('ComputerGroupComponent', () => {
  let component: ComputerGroupComponent;
  let fixture: ComponentFixture<ComputerGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
