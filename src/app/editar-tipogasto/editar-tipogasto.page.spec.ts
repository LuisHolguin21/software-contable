import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarTipogastoPage } from './editar-tipogasto.page';

describe('EditarTipogastoPage', () => {
  let component: EditarTipogastoPage;
  let fixture: ComponentFixture<EditarTipogastoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipogastoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
