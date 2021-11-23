import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNoticeComponent } from './report-notice.component';

describe('ReportNoticeComponent', () => {
  let component: ReportNoticeComponent;
  let fixture: ComponentFixture<ReportNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
