import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItensComponent } from './lista-itens.component';

describe('ListaItensComponent', () => {
  let component: ListaItensComponent;
  let fixture: ComponentFixture<ListaItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaItensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
