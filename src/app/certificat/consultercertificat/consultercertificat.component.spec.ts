import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultercertificatComponent } from './consultercertificat.component';

describe('ConsultercertificatComponent', () => {
  let component: ConsultercertificatComponent;
  let fixture: ComponentFixture<ConsultercertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultercertificatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultercertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
