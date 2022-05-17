import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPrecipitacaoComponent } from './cadastro-precipitacao.component';

describe('CadastroPrecipitacaoComponent', () => {
  let component: CadastroPrecipitacaoComponent;
  let fixture: ComponentFixture<CadastroPrecipitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPrecipitacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPrecipitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
