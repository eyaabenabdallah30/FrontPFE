import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierpatientComponent } from './dossierpatient.component';

describe('DossierpatientComponent', () => {
  let component: DossierpatientComponent;
  let fixture: ComponentFixture<DossierpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DossierpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
