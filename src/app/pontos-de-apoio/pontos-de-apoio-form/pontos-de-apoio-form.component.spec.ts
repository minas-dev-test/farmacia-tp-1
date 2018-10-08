import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosDeApoioFormComponent } from './pontos-de-apoio-form.component';

describe('PontosDeApoioFormComponent', () => {
  let component: PontosDeApoioFormComponent;
  let fixture: ComponentFixture<PontosDeApoioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontosDeApoioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontosDeApoioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
