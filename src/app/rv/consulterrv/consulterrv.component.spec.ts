import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterrvComponent } from './consulterrv.component';

describe('ConsulterrvComponent', () => {
  let component: ConsulterrvComponent;
  let fixture: ComponentFixture<ConsulterrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterrvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
