import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasFullComponent } from './noticias-full.component';

describe('NoticiasFullComponent', () => {
  let component: NoticiasFullComponent;
  let fixture: ComponentFixture<NoticiasFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
