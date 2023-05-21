import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsValidationComponent } from './js-validation.component';

describe('JsValidationComponent', () => {
  let component: JsValidationComponent;
  let fixture: ComponentFixture<JsValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
