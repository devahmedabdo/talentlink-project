import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTwoComponent } from './log-two.component';

describe('LogTwoComponent', () => {
  let component: LogTwoComponent;
  let fixture: ComponentFixture<LogTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
