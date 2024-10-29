import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInteresadosComponent } from './lista-interesados.component';

describe('ListaInteresadosComponent', () => {
  let component: ListaInteresadosComponent;
  let fixture: ComponentFixture<ListaInteresadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaInteresadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInteresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
