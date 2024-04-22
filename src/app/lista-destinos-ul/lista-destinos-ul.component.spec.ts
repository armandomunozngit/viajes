import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDestinosUlComponent } from './lista-destinos-ul.component';

describe('ListaDestinosUlComponent', () => {
  let component: ListaDestinosUlComponent;
  let fixture: ComponentFixture<ListaDestinosUlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDestinosUlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaDestinosUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
