import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RVaujourdhuiComponent } from './rvaujourdhui.component';

describe('RVaujourdhuiComponent', () => {
  let component: RVaujourdhuiComponent;
  let fixture: ComponentFixture<RVaujourdhuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RVaujourdhuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RVaujourdhuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
