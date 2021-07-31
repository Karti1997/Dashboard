import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookusageComponent } from './bookusage.component';

describe('BookusageComponent', () => {
  let component: BookusageComponent;
  let fixture: ComponentFixture<BookusageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookusageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookusageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
