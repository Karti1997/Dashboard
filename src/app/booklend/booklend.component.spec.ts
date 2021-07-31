import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklendComponent } from './booklend.component';

describe('BooklendComponent', () => {
  let component: BooklendComponent;
  let fixture: ComponentFixture<BooklendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
