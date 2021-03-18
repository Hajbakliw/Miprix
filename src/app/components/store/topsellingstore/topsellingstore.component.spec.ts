import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsellingstoreComponent } from './topsellingstore.component';

describe('TopsellingstoreComponent', () => {
  let component: TopsellingstoreComponent;
  let fixture: ComponentFixture<TopsellingstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopsellingstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsellingstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
