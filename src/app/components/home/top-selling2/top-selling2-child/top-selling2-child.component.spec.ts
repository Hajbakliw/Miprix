import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSelling2ChildComponent } from './top-selling2-child.component';

describe('TopSelling2ChildComponent', () => {
  let component: TopSelling2ChildComponent;
  let fixture: ComponentFixture<TopSelling2ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSelling2ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSelling2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
