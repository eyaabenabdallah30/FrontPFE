import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationaaffichComponent } from './consultationaaffich.component';

describe('ConsultationaaffichComponent', () => {
  let component: ConsultationaaffichComponent;
  let fixture: ComponentFixture<ConsultationaaffichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationaaffichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationaaffichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
