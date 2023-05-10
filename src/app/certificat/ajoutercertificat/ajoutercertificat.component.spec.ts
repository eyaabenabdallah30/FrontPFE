import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutercertificatComponent } from './ajoutercertificat.component';

describe('AjoutercertificatComponent', () => {
  let component: AjoutercertificatComponent;
  let fixture: ComponentFixture<AjoutercertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutercertificatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutercertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
