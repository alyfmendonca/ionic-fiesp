import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoRequerimentoPage } from './novo-requerimento.page';

describe('NovoRequerimentoPage', () => {
  let component: NovoRequerimentoPage;
  let fixture: ComponentFixture<NovoRequerimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoRequerimentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoRequerimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
