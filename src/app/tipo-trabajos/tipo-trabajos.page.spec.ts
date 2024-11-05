import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoTrabajosPage } from './tipo-trabajos.page';

describe('TipoTrabajosPage', () => {
  let component: TipoTrabajosPage;
  let fixture: ComponentFixture<TipoTrabajosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTrabajosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
