import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterordComponent } from './consulterord.component';

describe('ConsulterordComponent', () => {
  let component: ConsulterordComponent;
  let fixture: ComponentFixture<ConsulterordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
