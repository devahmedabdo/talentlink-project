import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFourComponent } from './log-four.component';

describe('LogFourComponent', () => {
  let component: LogFourComponent;
  let fixture: ComponentFixture<LogFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
