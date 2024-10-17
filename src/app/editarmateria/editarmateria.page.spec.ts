import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarmateriaPage } from './editarmateria.page';

describe('EditarmateriaPage', () => {
  let component: EditarmateriaPage;
  let fixture: ComponentFixture<EditarmateriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarmateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
