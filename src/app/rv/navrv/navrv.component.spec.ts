import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavrvComponent } from './navrv.component';

describe('NavrvComponent', () => {
  let component: NavrvComponent;
  let fixture: ComponentFixture<NavrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavrvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
