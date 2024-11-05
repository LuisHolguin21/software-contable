import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaVariedadPage } from './nueva-variedad.page';

describe('NuevaVariedadPage', () => {
  let component: NuevaVariedadPage;
  let fixture: ComponentFixture<NuevaVariedadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaVariedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
