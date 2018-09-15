import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPdaFormComponent } from './new-pda-form.component';

describe('NewPdaFormComponent', () => {
  let component: NewPdaFormComponent;
  let fixture: ComponentFixture<NewPdaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPdaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPdaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
