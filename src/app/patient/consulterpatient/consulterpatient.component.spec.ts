import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterpatientComponent } from './consulterpatient.component';

describe('ConsulterpatientComponent', () => {
  let component: ConsulterpatientComponent;
  let fixture: ComponentFixture<ConsulterpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
