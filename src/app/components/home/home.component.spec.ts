import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';

describe('HomeComponent', () => {

  const getByTestId = (id, compiled) => {
    return compiled.querySelector(`[data-test-id="${id}"]`);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  }));
});
