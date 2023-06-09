import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionFormComponent } from './transaccion-form.component';

describe('TransaccionFormComponent', () => {
  let component: TransaccionFormComponent;
  let fixture: ComponentFixture<TransaccionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
