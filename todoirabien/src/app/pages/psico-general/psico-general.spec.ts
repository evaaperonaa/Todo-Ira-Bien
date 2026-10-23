import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicoGeneral } from './psico-general';

describe('PsicoGeneral', () => {
  let component: PsicoGeneral;
  let fixture: ComponentFixture<PsicoGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsicoGeneral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsicoGeneral);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
