import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosDeApoioComponent } from './pontos-de-apoio.component';

describe('PontosDeApoioComponent', () => {
  let component: PontosDeApoioComponent;
  let fixture: ComponentFixture<PontosDeApoioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontosDeApoioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontosDeApoioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
