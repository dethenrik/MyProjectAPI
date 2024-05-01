import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Samurai2Component } from './samurai2.component';

describe('Samurai2Component', () => {
  let component: Samurai2Component;
  let fixture: ComponentFixture<Samurai2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Samurai2Component]
    });
    fixture = TestBed.createComponent(Samurai2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
