import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoconfigComponent } from './mongoconfig.component';

describe('MongoconfigComponent', () => {
  let component: MongoconfigComponent;
  let fixture: ComponentFixture<MongoconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
