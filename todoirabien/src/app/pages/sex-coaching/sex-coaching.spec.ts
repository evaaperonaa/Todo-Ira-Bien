import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexCoaching } from './sex-coaching';

describe('SexCoaching', () => {
  let component: SexCoaching;
  let fixture: ComponentFixture<SexCoaching>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SexCoaching]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SexCoaching);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
