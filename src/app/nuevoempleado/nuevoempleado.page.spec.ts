import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoempleadoPage } from './nuevoempleado.page';

describe('NuevoempleadoPage', () => {
  let component: NuevoempleadoPage;
  let fixture: ComponentFixture<NuevoempleadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoempleadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
