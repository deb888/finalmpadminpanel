import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonindexComponent } from './commonindex.component';

describe('CommonindexComponent', () => {
  let component: CommonindexComponent;
  let fixture: ComponentFixture<CommonindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
