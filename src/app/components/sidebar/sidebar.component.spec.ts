import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SidebarComponent} from './sidebar.component';

describe('SidebarComponent', () => {

  const getByTestId = (id, compiled) => {
    return compiled.querySelector(`[data-test-id="${id}"]`);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent]
    })
      .compileComponents();
  }));
});
