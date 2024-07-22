import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSlarayComponent } from './emp-slaray.component';

describe('EmpSlarayComponent', () => {
  let component: EmpSlarayComponent;
  let fixture: ComponentFixture<EmpSlarayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpSlarayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpSlarayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
