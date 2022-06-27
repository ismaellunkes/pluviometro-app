import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoriaComponent } from './autoria.component';

describe('AutoriaComponent', () => {
  let component: AutoriaComponent;
  let fixture: ComponentFixture<AutoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
