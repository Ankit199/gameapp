import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetpanelComponent } from './betpanel.component';

describe('BetpanelComponent', () => {
  let component: BetpanelComponent;
  let fixture: ComponentFixture<BetpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
