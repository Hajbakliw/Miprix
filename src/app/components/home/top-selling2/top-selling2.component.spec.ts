import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSelling2Component } from './top-selling2.component';

describe('TopSelling2Component', () => {
  let component: TopSelling2Component;
  let fixture: ComponentFixture<TopSelling2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSelling2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSelling2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
