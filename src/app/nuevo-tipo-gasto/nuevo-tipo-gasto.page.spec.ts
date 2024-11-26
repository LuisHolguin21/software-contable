import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoTipoGastoPage } from './nuevo-tipo-gasto.page';

describe('NuevoTipoGastoPage', () => {
  let component: NuevoTipoGastoPage;
  let fixture: ComponentFixture<NuevoTipoGastoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoGastoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
