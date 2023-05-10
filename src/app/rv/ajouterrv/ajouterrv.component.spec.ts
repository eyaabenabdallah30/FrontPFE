import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterrvComponent } from './ajouterrv.component';

describe('AjouterrvComponent', () => {
  let component: AjouterrvComponent;
  let fixture: ComponentFixture<AjouterrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterrvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
