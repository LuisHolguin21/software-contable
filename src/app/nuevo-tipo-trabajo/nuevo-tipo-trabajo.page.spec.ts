import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoTipoTrabajoPage } from './nuevo-tipo-trabajo.page';

describe('NuevoTipoTrabajoPage', () => {
  let component: NuevoTipoTrabajoPage;
  let fixture: ComponentFixture<NuevoTipoTrabajoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTipoTrabajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
