import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellingChildComponent } from './top-selling-child.component';

describe('TopSellingChildComponent', () => {
  let component: TopSellingChildComponent;
  let fixture: ComponentFixture<TopSellingChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSellingChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSellingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
