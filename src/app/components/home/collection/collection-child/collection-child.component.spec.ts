import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionChildComponent } from './collection-child.component';

describe('CollectionChildComponent', () => {
  let component: CollectionChildComponent;
  let fixture: ComponentFixture<CollectionChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
