import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingbarComponent } from './settingbar.component';

describe('SettingbarComponent', () => {
  let component: SettingbarComponent;
  let fixture: ComponentFixture<SettingbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
