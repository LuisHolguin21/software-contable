import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoGastosPage } from './tipo-gastos.page';

describe('TipoGastosPage', () => {
  let component: TipoGastosPage;
  let fixture: ComponentFixture<TipoGastosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoGastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
