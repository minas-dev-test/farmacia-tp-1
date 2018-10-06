import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosDeApoioListComponent } from './pontos-de-apoio-list.component';

describe('PontosDeApoioListComponent', () => {
  let component: PontosDeApoioListComponent;
  let fixture: ComponentFixture<PontosDeApoioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontosDeApoioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontosDeApoioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
