import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPdasComponent } from './list-pdas.component';

describe('ListaPdasComponent', () => {
  let component: ListPdasComponent;
  let fixture: ComponentFixture<ListPdasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPdasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPdasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
