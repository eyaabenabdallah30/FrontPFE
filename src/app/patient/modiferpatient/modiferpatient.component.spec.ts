import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiferpatientComponent } from './modiferpatient.component';

describe('ModiferpatientComponent', () => {
  let component: ModiferpatientComponent;
  let fixture: ComponentFixture<ModiferpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiferpatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModiferpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
