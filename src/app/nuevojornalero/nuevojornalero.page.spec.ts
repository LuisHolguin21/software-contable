import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevojornaleroPage } from './nuevojornalero.page';

describe('NuevojornaleroPage', () => {
  let component: NuevojornaleroPage;
  let fixture: ComponentFixture<NuevojornaleroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevojornaleroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
