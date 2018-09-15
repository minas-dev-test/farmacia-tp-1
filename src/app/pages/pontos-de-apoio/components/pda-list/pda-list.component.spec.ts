import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdaListComponent } from './pda-list.component';

describe('PdaListComponent', () => {
  let component: PdaListComponent;
  let fixture: ComponentFixture<PdaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
