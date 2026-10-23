import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoTrabajo } from './como-trabajo';

describe('ComoTrabajo', () => {
  let component: ComoTrabajo;
  let fixture: ComponentFixture<ComoTrabajo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoTrabajo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoTrabajo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
