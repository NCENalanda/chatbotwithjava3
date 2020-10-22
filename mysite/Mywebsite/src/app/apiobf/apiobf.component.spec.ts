import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiobfComponent } from './apiobf.component';

describe('ApiobfComponent', () => {
  let component: ApiobfComponent;
  let fixture: ComponentFixture<ApiobfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiobfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiobfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
