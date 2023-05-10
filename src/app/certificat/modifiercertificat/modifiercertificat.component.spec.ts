import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiercertificatComponent } from './modifiercertificat.component';

describe('ModifiercertificatComponent', () => {
  let component: ModifiercertificatComponent;
  let fixture: ComponentFixture<ModifiercertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiercertificatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiercertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
