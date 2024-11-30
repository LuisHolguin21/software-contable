import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrabajoganadoPage } from './trabajoganado.page';

describe('TrabajoganadoPage', () => {
  let component: TrabajoganadoPage;
  let fixture: ComponentFixture<TrabajoganadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoganadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
