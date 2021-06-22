import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstadoCuentaComponent } from './form-estado-cuenta.component';

describe('FormEstadoCuentaComponent', () => {
  let component: FormEstadoCuentaComponent;
  let fixture: ComponentFixture<FormEstadoCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEstadoCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEstadoCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
