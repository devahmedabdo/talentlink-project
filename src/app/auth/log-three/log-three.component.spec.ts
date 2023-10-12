import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogThreeComponent } from './log-three.component';

describe('LogThreeComponent', () => {
  let component: LogThreeComponent;
  let fixture: ComponentFixture<LogThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
