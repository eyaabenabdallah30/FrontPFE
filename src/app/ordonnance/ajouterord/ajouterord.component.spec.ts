import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterordComponent } from './ajouterord.component';

describe('AjouterordComponent', () => {
  let component: AjouterordComponent;
  let fixture: ComponentFixture<AjouterordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
