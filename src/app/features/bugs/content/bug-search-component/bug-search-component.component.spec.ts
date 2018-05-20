import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugSearchComponentComponent } from './bug-search-component.component';

describe('BugSearchComponentComponent', () => {
  let component: BugSearchComponentComponent;
  let fixture: ComponentFixture<BugSearchComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugSearchComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
