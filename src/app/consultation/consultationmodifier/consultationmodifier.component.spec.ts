import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationmodifierComponent } from './consultationmodifier.component';

describe('ConsultationmodifierComponent', () => {
  let component: ConsultationmodifierComponent;
  let fixture: ComponentFixture<ConsultationmodifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationmodifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationmodifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
