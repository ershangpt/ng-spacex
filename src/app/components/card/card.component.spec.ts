import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CardComponent} from './card.component';

describe('CardComponent', () => {

  const getByTestId = (id, compiled) => {
    return compiled.querySelector(`[data-test-id="${id}"]`);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .compileComponents();
  }));
});
