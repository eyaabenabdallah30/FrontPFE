import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultationajouterComponent } from './consultationajouter.component';

describe('ConsultationajouterComponent', () => {
  let component: ConsultationajouterComponent;
  let fixture: ComponentFixture<ConsultationajouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationajouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationajouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
