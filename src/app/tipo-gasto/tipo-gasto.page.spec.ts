import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoGastoPage } from './tipo-gasto.page';

describe('TipoGastoPage', () => {
  let component: TipoGastoPage;
  let fixture: ComponentFixture<TipoGastoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoGastoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
