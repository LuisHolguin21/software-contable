import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoestudiantePage } from './nuevoestudiante.page';

describe('NuevoestudiantePage', () => {
  let component: NuevoestudiantePage;
  let fixture: ComponentFixture<NuevoestudiantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoestudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
