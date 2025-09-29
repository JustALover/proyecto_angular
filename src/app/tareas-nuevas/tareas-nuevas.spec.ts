import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasNuevas } from './tareas-nuevas';

describe('TareasNuevas', () => {
  let component: TareasNuevas;
  let fixture: ComponentFixture<TareasNuevas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasNuevas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasNuevas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
