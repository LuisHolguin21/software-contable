import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarjornaleroPage } from './editarjornalero.page';

describe('EditarjornaleroPage', () => {
  let component: EditarjornaleroPage;
  let fixture: ComponentFixture<EditarjornaleroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarjornaleroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
