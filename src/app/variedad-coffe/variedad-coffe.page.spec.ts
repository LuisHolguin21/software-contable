import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VariedadCoffePage } from './variedad-coffe.page';

describe('VariedadCoffePage', () => {
  let component: VariedadCoffePage;
  let fixture: ComponentFixture<VariedadCoffePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VariedadCoffePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
