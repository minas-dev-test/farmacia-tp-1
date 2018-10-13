import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreOProjetoComponent } from './sobre-o-projeto.component';

describe('SobreOProjetoComponent', () => {
  let component: SobreOProjetoComponent;
  let fixture: ComponentFixture<SobreOProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreOProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreOProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
