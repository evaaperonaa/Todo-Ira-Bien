import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicoForense } from './psico-forense';

describe('PsicoForense', () => {
  let component: PsicoForense;
  let fixture: ComponentFixture<PsicoForense>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsicoForense]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsicoForense);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
