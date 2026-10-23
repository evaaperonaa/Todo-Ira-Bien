import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicoOrganizaciones } from './psico-organizaciones';

describe('PsicoOrganizaciones', () => {
  let component: PsicoOrganizaciones;
  let fixture: ComponentFixture<PsicoOrganizaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsicoOrganizaciones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsicoOrganizaciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
