import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HELLOComponent } from './hello.component';

describe('HELLOComponent', () => {
  let component: HELLOComponent;
  let fixture: ComponentFixture<HELLOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HELLOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HELLOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
