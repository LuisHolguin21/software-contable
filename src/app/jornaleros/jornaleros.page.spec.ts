import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JornalerosPage } from './jornaleros.page';

describe('JornalerosPage', () => {
  let component: JornalerosPage;
  let fixture: ComponentFixture<JornalerosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JornalerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
