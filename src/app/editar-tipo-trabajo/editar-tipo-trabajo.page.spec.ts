import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarTipoTrabajoPage } from './editar-tipo-trabajo.page';

describe('EditarTipoTrabajoPage', () => {
  let component: EditarTipoTrabajoPage;
  let fixture: ComponentFixture<EditarTipoTrabajoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipoTrabajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
