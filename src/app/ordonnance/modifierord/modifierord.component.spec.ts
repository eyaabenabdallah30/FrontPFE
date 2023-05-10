import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierordComponent } from './modifierord.component';

describe('ModifierordComponent', () => {
  let component: ModifierordComponent;
  let fixture: ComponentFixture<ModifierordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
