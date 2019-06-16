import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendReqPage } from './agend-req.page';

describe('AgendReqPage', () => {
  let component: AgendReqPage;
  let fixture: ComponentFixture<AgendReqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendReqPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendReqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
