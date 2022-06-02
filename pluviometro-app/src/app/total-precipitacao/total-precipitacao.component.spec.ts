import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPrecipitacaoComponent } from './total-precipitacao.component';

describe('TotalPrecipitacaoComponent', () => {
  let component: TotalPrecipitacaoComponent;
  let fixture: ComponentFixture<TotalPrecipitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPrecipitacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPrecipitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
