import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierrvComponent } from './modifierrv.component';

describe('ModifierrvComponent', () => {
  let component: ModifierrvComponent;
  let fixture: ComponentFixture<ModifierrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierrvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
